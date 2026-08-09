function AnnouncementList({ announcements }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">

      <h2 className="text-xl font-bold mb-5">
        Announcements
      </h2>

      {announcements.map((announcement) => (

        <div
          key={announcement.id}
          className="border-l-4 border-blue-500 pl-4 mb-6"
        >

          <h3 className="font-semibold">
            {announcement.title}
          </h3>

          <p className="text-gray-500">
            {announcement.message}
          </p>

          <p className="text-gray-400 text-sm">
            {announcement.time}
          </p>

        </div>

      ))}

    </div>
  );
}

export default AnnouncementList;