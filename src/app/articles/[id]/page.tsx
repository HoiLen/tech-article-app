"use client";

import { useMutation, useQuery } from "convex/react";
import { FC, useEffect, useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import type MDEditorType from "@uiw/react-md-editor";

type Props = {
  id: string;
};

const ArticlePage: FC<Props> = ({ id }) => {
  const article = useQuery(api.articles.getById, {
    id: id as Id<"articles">,
  });
  const incrementViewCount = useMutation(api.articles.incrementViewCount);
  const [MDEditor, setMDEditor] = useState<typeof MDEditorType | null>(null);

  useEffect(() => {
    import("@uiw/react-md-editor").then((mod) => {
      setMDEditor(mod.default);
    });

    // そのユーザーが一度閲覧したかどうかを Session で管理する
    // StrictMode によるビューの２重カウントと、同一ユーザーによるビューの連続カウントを防ぐ
    const viewed = sessionStorage.getItem(`viewed-${id}`);
    if (!viewed) {
      incrementViewCount({ id: id as Id<"articles"> });
      sessionStorage.setItem(`viewed-${id}`, "true");
    }
  }, [id]);

  if (!article || !MDEditor) {
    return (
      <div className="">
        <div className=""></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* 記事の情報 */}
      <div className="mb-8">
        {/* タイトル */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        {/* 著者・公開日・閲覧数 */}
        <div className="space-x-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
              {article.author.charAt(0)}
            </div>
            <div className="ml-3">
              <div className="font-medium text-gray-900">{article.author}</div>
              <div className="text-sm text-gray-500 flex">
                <div>
                  <span className="mr-1">Published on</span>
                  {new Date(article.createdAt).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="mx-2">・</div>
                <div className="text-gray-500">{article.viewCount} views</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 記事の内容 */}
      <div
        data-color-mode="light"
        className="prose max-w-none bg-white mx-0 p-4"
      >
        <MDEditor.Markdown source={article.description} />
      </div>
    </div>
  );
};

export default ArticlePage;
