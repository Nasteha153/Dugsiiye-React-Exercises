import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-white shadow px-8 py-5 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <NavLink
          to="/"
          className="text-5xl text-red-900"
        >
          Recipe Book
        </NavLink>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold"
                : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold"
                : ""
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold"
                : ""
            }
          >
            Categories
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;