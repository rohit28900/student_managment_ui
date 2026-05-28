import {
  BookOpen,
  Clock3,
  Users,
  MoreHorizontal,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    title: "Computer Science",
    students: 320,
    duration: "4 Years",
    status: "Active",
  },
  {
    title: "Data Science",
    students: 180,
    duration: "2 Years",
    status: "Active",
  },
  {
    title: "MBA",
    students: 140,
    duration: "2 Years",
    status: "Inactive",
  },
  {
    title: "BCA",
    students: 210,
    duration: "3 Years",
    status: "Active",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Courses
          </h1>

          <p className="mt-2 text-slate-500">
            Manage all academic courses
          </p>
        </div>

        <Button className="h-12 rounded-2xl bg-indigo-600 px-6 text-white hover:bg-indigo-500">
          <Plus className="mr-2 h-5 w-5" />
          Add Course
        </Button>
      </div>

      {/* Course Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.title}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <CardContent className="p-6">
              {/* Top */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <BookOpen className="h-7 w-7 text-indigo-600" />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {course.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Professional academic course management
                </p>
              </div>

              {/* Stats */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Users className="h-5 w-5 text-slate-400" />

                  <span>
                    {course.students} Students
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Clock3 className="h-5 w-5 text-slate-400" />

                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between">
                <Badge
                  className={
                    course.status === "Active"
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                      : "bg-red-100 text-red-700 hover:bg-red-100"
                  }
                >
                  {course.status}
                </Badge>

                <Button
                  variant="outline"
                  className="rounded-xl border-slate-200"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}