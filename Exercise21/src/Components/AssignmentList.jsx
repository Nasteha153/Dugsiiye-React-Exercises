function AssignmentList({ assignments }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Upcoming Assignments
      </h2>

      {assignments.map((assignment) => (

        <div
          key={assignment.id}
          className="flex justify-between mb-6"
        >

          <div>

            <h3 className="font-semibold">
              {assignment.title}
            </h3>

            <p className="text-gray-500">
              {assignment.course}
            </p>

          </div>

          <div className="text-right">

            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
              {assignment.status}
            </span>

            <p className="text-gray-500 text-sm mt-2">
              Due {assignment.dueDate}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default AssignmentList;