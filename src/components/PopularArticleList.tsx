import { FC } from "react";
import ArticleCard from "./ArticleCard";

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
    <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <span key={index}>
          <ArticleCard article={article} />
        </span>
      ))}
    </div>
  );
};
