"use client";

import { useQuery } from "convex/react";
import "./global.css";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Article } from "../domain/Article";
import LatestArticleList from "../components/LatestArticleList";

export default function Home() {
  // useQuery()の引数としてデータベースから記事情報を取得できる
  const articlesData = useQuery(api.articles.get);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!articlesData) return;
    const articleList = articlesData.map((article) => {
      return new Article(
        article.id,
        article.title,
        article.description,
        article.author,
        article.createdAt,
        article.viewCount
      );
    });
    setArticles(articleList);
  }, [articlesData]);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <p>{article.author}</p>
            <p>{article.createdAt}</p>
            <p>{article.viewCount}</p>
          </div>
        );
      })}
      <LatestArticleList />
    </div>
  );
}
