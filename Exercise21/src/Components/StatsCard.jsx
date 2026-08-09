function StatsCard({ stat }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">

      <span className="text-3xl">
        {stat.icon}
      </span>

      <div>

        <p className="text-gray-500">
          {stat.label}
        </p>

        <h2 className="text-2xl font-bold">
          {stat.value}
        </h2>

      </div>

    </div>
  );
}

export default StatsCard;