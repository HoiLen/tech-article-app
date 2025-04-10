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
  // リクエストの url から string のパラメータを取り出す
  // 取り出せたら string 型に変換して author に代入
  // 取り出せなかったらデフォルトで "HoiLen" を author に代入
  const author = url.searchParams.get("author")
    ? String(url.searchParams.get("author"))
    : "HoiLen";

  // データの取得 : query の引数に { author } を追加して取得条件を指定する
  const articles = await client.query(api.articles.getByAuthor, {
    author: author,
  });

  return new Response(JSON.stringify(articles ?? "null?"));
}
