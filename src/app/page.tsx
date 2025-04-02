import "./global.css";
import { Suspense } from "react";
import LatestArticleList from "../components/LatestArticleList";
import { PopularArticleList } from "../components/PopularArticleList";
import { Link } from "@lazarv/react-server/navigation";
import { ArrowRight, Clock } from "lucide-react";

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
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Welcome Message */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to TechShare
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and share valuable insights in technology.
        </p>
        <Link
          to="/editor"
          className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition-colors duration-300"
        >
          Start Writing <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      {/* Article List */}
      <div className="mb-12">
        <div className="flex items-center mb-8">
          <Clock size={24} className="text-gray-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Latest Article</h2>
        </div>
        <LatestArticleList />
      </div>

      <h1 className="font-bold">Popular Articles</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PopularArticleList articles={articles} />
      </Suspense>
    </div>
  );
}
