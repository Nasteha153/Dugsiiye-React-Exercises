import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { posts } = usePosts();
  const { isAuthenticated, logout } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    const value = e.target.value;

    if (value) {
      navigate(`/?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            MyBlog
          </Link>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/create")}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Create Post
                </button>

                <button
                  onClick={logout}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/create")}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Create Post
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Latest Posts
          </h1>

          <p className="mt-2 text-gray-600">
            Explore our latest blog posts.
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={handleSearch}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  Read this post →
                </p>
              </Link>
            ))
          ) : (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
              <p className="text-gray-500">
                No posts found.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;