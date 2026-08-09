import { useState } from "react";

import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import CourseProgress from "../components/CourseProgress";
import AssignmentList from "../components/AssignmentList";
import AnnouncementList from "../components/AnnouncementList";

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Average Grade", value: "88%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2026-03-20",
      status: "Pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2026-03-18",
      status: "Completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2026-03-25",
      status: "In Progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <Header />

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-6">
          {stats.map((stat) => (
            <StatsCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 mt-6">

          <div className="col-span-2">
            <CourseProgress courses={courses} />
          </div>

          <div>
            <AssignmentList assignments={assignments} />

            <AnnouncementList announcements={announcements} />
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;