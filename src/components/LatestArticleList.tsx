"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Article } from "../domain/Article";
import ArticleCardRectangle from "./ArticleCardRectangle";

const LatestArticleList = () => {
  // 記事情報の取得
  const articlesData = useQuery(api.articles.get);
  const [articles, setArticles] = useState<Article[]>([]);

  // articlesData に更新が入ったら実行
  useEffect(() => {
    if (!articlesData) return;

    // articlesData から１つずつ記事情報を取り出して Article型に変換して articles に渡す
    const articles = articlesData?.map((a) => {
      return new Article(
        a.id,
        a.title,
        a.description,
        a.author,
        a.createdAt,
        a.viewCount
      );
    });
    // state の articles にセット
    setArticles(articles);
  }, [articlesData]);

  return (
    <div className="mx-5 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <span key={article.id}>
          <ArticleCardRectangle article={article} />
        </span>
      ))}
    </div>
  );
};

export default LatestArticleList;
