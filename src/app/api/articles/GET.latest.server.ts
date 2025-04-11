import { ConvexClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

// convex クライアントを用意
const convexUrl = import.meta.env.VITE_CONVEX_URL;
if (!convexUrl) {
  throw new Error("VITE_CONVEX_URL is not defined.");
}
const client = new ConvexClient(convexUrl);

export default async function GetLatest(request: Request) {
  const url = new URL(request.url);

  // URL 内のパラメータを取得
  const limit = url.searchParams.get("limit")
    ? Number(url.searchParams.get("limit"))
    : 10;

  // /convex/articles.ts の getLatest を実行
  const articles = await client.query(api.articles.getLatest, {
    limit: limit,
  });

  return new Response(JSON.stringify(articles ?? "null?"));
}
