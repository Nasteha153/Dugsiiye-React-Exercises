import { Link, Outlet } from "react-router";

function Categories() {

  const categories = [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Start your day right",
    },

    {
      id: "lunch",
      name: "Lunch",
      description: "Midday favorites",
    },

    {
      id: "dinner",
      name: "Dinner",
      description: "Evening meals",
    },

    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet treats",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Recipe Categories
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        <aside className="space-y-3">

          {categories.map((category) => (

            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="block bg-white border rounded-xl p-4 hover:shadow-md"
            >

              <h2 className="font-bold">
                {category.name}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                {category.description}
              </p>

            </Link>

          ))}

        </aside>

        {/* Nested page */}

        <div className="md:col-span-3">
          <Outlet />
        </div>

      </div>

    </section>
  );
}

export default Categories;