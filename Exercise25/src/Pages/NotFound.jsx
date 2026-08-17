import { Link } from "react-router";

function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>

    </section>
  );
}

export default NotFound;