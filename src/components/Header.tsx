import { Link } from "@lazarv/react-server/navigation";
import { PenTool } from "lucide-react";
import { ReactNode } from "react";

export default function Header(props: { pageName: ReactNode | null }) {
  const { pageName } = props;

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <div className="text-2xl font-bold text-amber-700">
              P<span className="text-amber-500">o</span>iT
              <span className="text-amber-500">e</span>ch
            </div>
          </Link>

          {pageName}
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/blogs">
            <div className="text-lg font-medium">Blogs</div>
          </Link>
          <Link to="/editor">
            <div className="bg-amber-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-amber-950 hover:text-amber-300 transition duration-300 ease-in-out">
              <PenTool size={20} className="mr-2" />
              Write
            </div>
          </Link>
          <Link to="/user">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold hover:bg-gray-300 transition-colors duration-300">
              U
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
