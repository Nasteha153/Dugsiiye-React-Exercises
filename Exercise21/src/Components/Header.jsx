function Header() {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, Student!
        </h1>

        <p className="text-gray-500 mt-2">
          Here's what's happening with your courses today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="text-xl">
          🔔
        </button>

        <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center">
          S
        </div>

      </div>

    </div>
  );
}

export default Header;