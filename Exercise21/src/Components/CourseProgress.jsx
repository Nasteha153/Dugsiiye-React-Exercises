function CourseProgress({ courses }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Course Progress
      </h2>

      {courses.map((course) => (

        <div key={course.id} className="mb-8">

          <div className="flex justify-between">

            <h3 className="font-semibold">
              {course.name}
            </h3>

            <span>{course.progress}%</span>

          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">

            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>

          </div>

          <p className="text-gray-500 mt-2">
            Next: {course.nextLesson}
          </p>

          <p className="text-sm text-gray-400">
            {course.instructor}
          </p>

        </div>

      ))}

    </div>
  );
}

export default CourseProgress;