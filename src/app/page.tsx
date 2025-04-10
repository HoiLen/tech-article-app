import "./global.css";
import { Suspense } from "react";
import LatestArticleList from "../components/LatestArticleList";
import { PopularArticleList } from "../components/PopularArticleList";
import { Link } from "@lazarv/react-server/navigation";
import { ArrowRight, Clock, Flame } from "lucide-react";

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
    "http://localhost:3000/api/articles/popular?limit=4"
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
          Welcome to{" "}
          <span className="text-amber-700">
            P<span className="text-amber-500">o</span>
            iT
            <span className="text-amber-500">e</span>
            ch
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and share valuable insights in technology.
        </p>
        <Link
          to="/editor"
          className="inline-flex items-center bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-950 hover:text-amber-300 transition-colors duration-300"
        >
          Start Writing <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      {/* Article List */}
      {/* - Latest Articles */}
      <div className="mb-12">
        <div className="flex items-center mb-8 sticky top-[72px] bg-[rgb(242,248,237)] border-b-4 border-amber-500">
          <Clock size={24} className="text-gray-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
        </div>
        <LatestArticleList />
      </div>

      {/* - Popular Articles */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8 sticky top-[72px] bg-[rgb(242,248,237)] border-b-4 border-amber-500">
          <div className="flex items-center">
            <Flame size={24} className="text-gray-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Articles
            </h2>
          </div>
          <Link
            to="/popular"
            className="inline-flex items-center text-teal-600 hover:text-teal-700"
          >
            View all
            <ArrowRight className="ml-1" size={20} />
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PopularArticleList articles={articles} />
        </Suspense>
      </div>
    </div>
  );
}
