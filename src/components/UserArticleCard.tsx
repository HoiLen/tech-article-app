"use client";

import { FC } from "react";
import { Article } from "../domain/Article";
import { Link } from "@lazarv/react-server/navigation";
import { Eye, PenTool, Trash2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useClient } from "@lazarv/react-server/client";

type Props = {
  article: Article;
};

const UserArticleCard: FC<Props> = ({ article }) => {
  const deleteArticle = useMutation(api.articles.deleteArticle);
  const { navigate } = useClient();

  const deleteArticleHandler = async (article: Article) => {
    const result = window.confirm(article.title + "\nを本当に削除しますか？");
    if (result) {
      await deleteArticle({ id: article.id as Id<"articles"> });
      alert(article.title + "\nを削除しました");
      navigate("/user");
    }
  };

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
        <div>
          <Link
            to={`/editor/${article.id}`}
            className="border border-amber-500 bg-amber-500 text-white px-4 py-2 rounded-md flex items-center hover:border-amber-950 hover:bg-amber-950 hover:text-amber-300 transition duration-300 ease-in-out"
          >
            <PenTool size={20} className="mr-2" />
            Edit Article
          </Link>
        </div>

        <div className="pl-6">
          <button
            className="border border-red-500 text-red-500 px-4 py-2 rounded-md flex items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            onClick={() => deleteArticleHandler(article)}
          >
            <Trash2 size={20} className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserArticleCard;
