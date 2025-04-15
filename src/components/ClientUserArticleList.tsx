import { UserArticleList } from "./UserArticleList";

type ArticleProps = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const ClientUserArticleList = ({ articles }: { articles: ArticleProps[] }) => {
  return <UserArticleList articles={articles} />;
};

export default ClientUserArticleList;
