import { Link } from "react-router";

function Home() {
  return (
    <section className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-5">
          Welcome to Recipe Book
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Discover delicious recipes for every occasion.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            to="/recipes"
            className="bg-white rounded-2xl shadow p-10 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3">
              Explore Recipes
            </h2>

            <p className="text-gray-600">
              Browse all available recipes.
            </p>
          </Link>

          <Link
            to="/categories"
            className="bg-white rounded-2xl shadow p-10 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3">
              Browse Categories
            </h2>

            <p className="text-gray-600">
              Find recipes by category.
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Home;