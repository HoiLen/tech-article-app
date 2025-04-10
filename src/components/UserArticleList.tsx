import { FC } from "react";
import UserArticleCard from "./UserArticleCard";

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

export const UserArticleList: FC<Props> = ({ articles }) => {
  return (
    <div className="mx-5 grid grid-cols-1 gap-8">
      {articles.map((article, index) => (
        <span key={index}>
          <UserArticleCard article={article} />
        </span>
      ))}
    </div>
  );
};
