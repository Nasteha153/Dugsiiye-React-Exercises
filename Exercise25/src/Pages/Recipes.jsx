import { Link } from "react-router";

function Recipes() {
  const recipes = [
    {
      id: 1,
      title: "Classic Chocolate Cake",
      description:
        "Rich and moist chocolate cake perfect for any occasion",
      category: "desserts",
      ingredients: [
        "2 cups flour",
        "1 cup sugar",
        "3 eggs",
        "1 cup milk",
      ],
      instructions: [
        "Mix dry ingredients",
        "Add wet ingredients",
        "Bake at 350°F for 25 minutes",
      ],
    },

    {
      id: 2,
      title: "Spaghetti Carbonara",
      description:
        "Traditional Italian pasta with creamy egg sauce",
      category: "dinner",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pecorino cheese",
        "Black pepper",
      ],
      instructions: [
        "Cook pasta",
        "Mix eggs and cheese",
        "Combine while hot",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          All Recipes
        </h1>

        <p className="text-gray-600 mt-2">
          Explore our delicious recipes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition block"
          >
            
            <span className="text-sm text-red-500 font-medium capitalize">
              {recipe.category}
            </span>

            <h2 className="text-xl font-bold mt-2">
              {recipe.title}
            </h2>

            <p className="text-gray-600 my-4">
              {recipe.description}
            </p>

          </Link>
        ))}

      </div>
    </section>
  );
}

export default Recipes;