import { Link, useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            MyBlog
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/create"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Create Post
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        {routing}
      </main>
    </div>
  );
};

export default App;