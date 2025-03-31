"use client";

import { FC } from "react";
import { Article } from "../domain/Article";
import { Link } from "@lazarv/react-server/navigation";

type Props = {
  article: Article;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const ArticleCard: FC<Props> = ({ article }) => {
  const truncatedTitle = truncateText(article.title, 45);
  const truncatedDescription = truncateText(article.description, 100);

  return (
    <Link to={`/articles/${article.id}`}>
      <div
        className="
          border
          border-gray-300
          rounded-lg overflow-hidden
          hover:shadow-xl
          transition duration-300
          cursor-pointer
          w-full h-[280px]
          mb-4"
      >
        <div className="h-2 bg-orange-300"></div>
        <div className="p-6 h-[calc(280px-8px)] flex flex-col">
          <h3 className="text-xl font-bold text-orange-950 mb-2 line-clamp-2">
            {truncatedTitle}
          </h3>
          <p className="text-gray-600 mb-2 line-clamp-4 flex-grow">
            {truncatedDescription}
          </p>
          <div className="flex items-center mt-auto">
            <div className="w-8 h-8 flex rounded-full bg-teal-100 items-center justify-center font-medium mr-3">
              {article.author.charAt(0)}
            </div>
            <div>
              <div className="font-medium">{article.author}</div>
              <div className="text-gray-500">
                {new Date(article.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
