import {Link,useLocation,useNavigate,useParams} from "react-router-dom";

import { usePosts } from "../context/PostsContext";

const PostDetail = () => {
  const { postId } = useParams();
  const { posts } = usePosts();

  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = posts.findIndex(
    (post) => post.id === Number(postId)
  );

  const post = posts[currentIndex];

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            Post Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The post you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  const goToPost = (index) => {
    const targetPost = posts[index];

    navigate(`/posts/${targetPost.id}`, {
      state: {
        fromPost: post.id,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to posts
        </Link>

        <article className="mt-6 rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-blue-600">
            Post #{post.id}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            {post.title}
          </h1>

          <div className="my-6 h-px bg-gray-200" />

          <p className="leading-8 text-gray-600">
            {post.content}
          </p>

          {location.state?.fromPost && (
            <p className="mt-6 text-sm text-gray-400">
              Navigated from post #{location.state.fromPost}
            </p>
          )}
        </article>

        <div className="mt-6 flex justify-between">
          <button
            disabled={currentIndex === 0}
            onClick={() => goToPost(currentIndex - 1)}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            disabled={currentIndex === posts.length - 1}
            onClick={() => goToPost(currentIndex + 1)}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
};

export default PostDetail;