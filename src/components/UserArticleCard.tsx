"use client";

import { FC } from "react";
import { Article } from "../domain/Article";
import { Link } from "@lazarv/react-server/navigation";
import { Eye, PenTool, Trash2 } from "lucide-react";

type Props = {
  article: Article;
};

const UserArticleCard: FC<Props> = ({ article }) => {
  return (
    <div className="flex flex-col">
      <Link to={`/articles/${article.id}`}>
        <div
          className="
          border
          border-gray-300
          group
          rounded-lg overflow-hidden
          hover:bg-gray-50
          hover:shadow-xl
          transition duration-300
          cursor-pointer
          h-auto
          hover:h-[auto-8px]
          mb-2"
        >
          <div className="h-2 group-hover:bg-amber-500 transition duration-500"></div>
          <div className="p-6 h-auto flex flex-col mb-1">
            <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>

            {/* icon / author / publish day / view count */}
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 flex rounded-full bg-teal-100 items-center justify-center font-medium">
                {article.author.charAt(0)}
              </div>
              <div className="ml-2 font-medium">{article.author}</div>
              <div className="ml-2 text-gray-500">
                {new Date(article.createdAt).toLocaleDateString()}
              </div>
              <Eye className="ml-2 w-4 h-4 text-gray-500" />
              <div className="ml-1 text-gray-500">{article.viewCount}</div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-end">
        <Link to={`/editor/${article.id}`} className="pl-6">
          <div className="border border-amber-500 bg-amber-500 text-white px-4 py-2 rounded-md flex items-center hover:border-amber-950 hover:bg-amber-950 hover:text-amber-300 transition duration-300 ease-in-out">
            <PenTool size={20} className="mr-2" />
            Edit Article
          </div>
        </Link>
        <Link to="/editor" className="pl-6">
          <div className="border border-red-500 text-red-500 px-4 py-2 rounded-md flex items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
            <Trash2 size={20} className="mr-2" />
            Delete
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserArticleCard;
