import { ConvexClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

// API では Convex の設定をしていないので、クライアントを用意する必要がある
// import.meta.env で Vite は環境変数を .env.local から取得できる
const convexUrl = import.meta.env.VITE_CONVEX_URL;
if (!convexUrl) {
  throw new Error("VITE_CONVEX_URL is not defined.");
}
const client = new ConvexClient(convexUrl);

export default async function GetPopular(request: Request) {
  const url = new URL(request.url);
  // リクエストのurlからlimitのパラメータを取り出す
  // 取り出せたらnumber型に変換してlimitに代入
  // 取り出せなかったらデフォルトで20をlimitに代入
  const limit = url.searchParams.get("limit")
    ? Number(url.searchParams.get("limit"))
    : 20;

  // データの取得 : query の引数に {limit} を追加して取得数を制限する
  const articles = await client.query(api.articles.getPopular, {
    limit: limit,
  });

  return new Response(JSON.stringify(articles ?? "null?"));
}
