import { FC } from "react";
import ArticleCardRectangle from "./ArticleCardRectangle";

type ArticleProps = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

type Props = {
  articles: ArticleProps[];
};

export const PopularArticleList: FC<Props> = ({ articles }) => {
  return (
    <div className="mx-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article, index) => (
        <span key={index}>
          <ArticleCardRectangle article={article} />
        </span>
      ))}
    </div>
  );
};
