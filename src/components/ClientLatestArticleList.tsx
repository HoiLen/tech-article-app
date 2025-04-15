import LatestArticleList from "./LatestArticleList";

type ArticleProps = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const ClientLatestArticleList = ({
  articles,
}: {
  articles: ArticleProps[];
}) => {
  return <LatestArticleList articles={articles} />;
};

export default ClientLatestArticleList;
