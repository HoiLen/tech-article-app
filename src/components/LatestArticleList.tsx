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

const LatestArticleList: FC<Props> = ({ articles }) => {
  // 記事情報の取得
  // const articlesData = useQuery(api.articles.get);
  // const [articles, setArticles] = useState<Article[]>([]);

  // articlesData に更新が入ったら実行
  // useEffect(() => {
  //   if (!articlesData) return;

  //   // articlesData から１つずつ記事情報を取り出して Article型に変換して articles に渡す
  //   const articles = articlesData?.map((a) => {
  //     return new Article(
  //       a.id,
  //       a.title,
  //       a.description,
  //       a.author,
  //       a.createdAt,
  //       a.viewCount
  //     );
  //   });
  //   // state の articles にセット
  //   setArticles(articles);
  // }, [articlesData]);

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

export default LatestArticleList;
