import { Link, useParams } from "react-router";

function RecipeDetail() {

  const { id } = useParams();

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

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <section className="text-center py-20">

        <h1 className="text-3xl font-bold">
          Recipe Not Found
        </h1>

        <Link
          to="/recipes"
          className="text-red-500 mt-4 inline-block"
        >
          Back to Recipes
        </Link>

      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-8 py-12">

      <Link
        to="/recipes"
        className="text-red-500"
      >
        ← Back to Recipes
      </Link>

      <div className="mt-8">

        <span className="text-red-500 capitalize">
          {recipe.category}
        </span>

        <h1 className="text-4xl font-bold mt-2">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          {recipe.description}
        </p>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Ingredients
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {recipe.ingredients.map(
            (ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            )
          )}

        </ul>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Instructions
        </h2>

        <ol className="list-decimal pl-6 space-y-2">

          {recipe.instructions.map(
            (instruction, index) => (
              <li key={index}>
                {instruction}
              </li>
            )
          )}

        </ol>

      </div>

    </section>
  );
}

export default RecipeDetail;