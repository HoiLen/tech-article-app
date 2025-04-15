import { PopularArticleList } from "./PopularArticleList";

type ArticleProps = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const ClientPopularArticleList = ({
  articles,
}: {
  articles: ArticleProps[];
}) => {
  return <PopularArticleList articles={articles} />;
};

export default ClientPopularArticleList;
