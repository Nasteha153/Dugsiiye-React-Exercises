import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts/:postId",
    element: <PostDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: (
      <ProtectedRoute>
        <CreatePost />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;