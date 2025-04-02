import "./global.css";
import { Suspense } from "react";
import LatestArticleList from "../components/LatestArticleList";
import { PopularArticleList } from "../components/PopularArticleList";

type ArticleJson = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const getArticles = async () => {
  const response = await fetch(
    "http://localhost:3000/api/articles/popular?limit=2"
  );

  const data = await response.json();
  console.log(data);
  return data;
};

export default async function Home() {
  const articles = (await getArticles()) as ArticleJson[];

  return (
    <div>
      <h1 className="font-bold">Latest Articles</h1>
      <LatestArticleList />
      <h1 className="font-bold">Popular Articles</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PopularArticleList articles={articles} />
      </Suspense>
    </div>
  );
}
