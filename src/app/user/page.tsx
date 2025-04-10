import { UserArticleList } from "../../components/UserArticleList";

type ArticleJson = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const getArticles = async () => {
  const response = await fetch(
    "http://localhost:3000/api/articles/user?author=@HoiLen"
  );

  const data = await response.json();
  console.log(data);
  return data;
};

const UserPage = async () => {
  const articles = (await getArticles()) as ArticleJson[];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Your tech blog list</h1>
      <div className="mt-12">
        <UserArticleList articles={articles} />
      </div>
    </div>
  );
};

export default UserPage;
