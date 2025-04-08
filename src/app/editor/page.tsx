"use client";

import { useMutation } from "convex/react";
import { FC, useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useClient } from "@lazarv/react-server/client";
import MDEditorComponent from "../../components/MDEditorComponent";

const Editor: FC = () => {
  // convex の関数を受け取る
  const insertArticle = useMutation(api.articles.insert);

  const [content, setContent] = useState("");

  //
  const { navigate } = useClient();

  // <form> から情報を受け取って処理する
  const handleAddArticle = async (formData: FormData) => {
    const title = formData.get("title") as string;
    await insertArticle({
      title,
      description: content,
    });

    alert("Article created successfully!");
    navigate("/");
  };

  // デバッグ用 useEffect
  // useEffect(() => {
  //   console.log(content);
  // }, [content]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" data-color-mode="light">
      <h1 className="text-3xl font-bold mb-8">Create new Article</h1>
      <form
        // @ts-expect-error
        // Server Actions are not yet supported in types
        action={handleAddArticle}
        className="space-y-6"
      >
        {/* タイトルの入力欄 */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:ring-4 focus:ring-blue-500 outline-none transition-colors"
            required
          />
        </div>

        {/* 記事の入力欄 */}
        <div>
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <div className="prose max-w-none">
            <MDEditorComponent
              value={content}
              onChange={(value) => setContent(value || "")}
            />
            <p className="mt-1 text-sm text-gray-500">
              Supports Markdown formatting. You can use **bold**, *italic*, and
              other Markdown syntax.
            </p>
          </div>
        </div>

        {/* 公開ボタン */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Publish Article
        </button>
      </form>
    </div>
  );
};

export default Editor;
