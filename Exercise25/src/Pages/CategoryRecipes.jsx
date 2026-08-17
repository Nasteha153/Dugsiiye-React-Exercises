import { Link, useParams } from "react-router";

function CategoryRecipes() {

  const { categoryId } = useParams();

  const recipes = [
    {
      id: 1,
      title: "Classic Chocolate Cake",
      description:
        "Rich and moist chocolate cake perfect for any occasion",
      category: "desserts",
    },

    {
      id: 2,
      title: "Spaghetti Carbonara",
      description:
        "Traditional Italian pasta with creamy egg sauce",
      category: "dinner",
    },
  ];

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6 capitalize">
        {categoryId} Recipes
      </h2>

      {filteredRecipes.length === 0 ? (

        <p className="text-gray-500">
          No recipes found in this category.
        </p>

      ) : (

        <div className="grid md:grid-cols-2 gap-5">

          {filteredRecipes.map((recipe) => (

            <div
              key={recipe.id}
              className="bg-white border rounded-xl p-5"
            >

              <span className="text-red-500 capitalize">
                {recipe.category}
              </span>

              <h3 className="text-xl font-bold mt-2">
                {recipe.title}
              </h3>

              <p className="text-gray-600 my-3">
                {recipe.description}
              </p>

              <Link
                to={`/recipes/${recipe.id}`}
                className="text-red-500 font-medium"
              >
                View Recipe →
              </Link>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default CategoryRecipes;