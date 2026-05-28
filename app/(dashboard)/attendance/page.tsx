import {
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Clock3,
  Search,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const attendance = [
  {
    name: "Rohit Singh",
    course: "Computer Science",
    status: "Present",
    time: "09:02 AM",
  },
  {
    name: "Aman Verma",
    course: "BCA",
    status: "Absent",
    time: "--",
  },
  {
    name: "Priya Sharma",
    course: "MBA",
    status: "Late",
    time: "09:35 AM",
  },
  {
    name: "Anjali Gupta",
    course: "Data Science",
    status: "Present",
    time: "08:55 AM",
  },
];

export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Attendance
          </h1>

          <p className="mt-2 text-slate-500">
            Track daily student attendance records
          </p>
        </div>

        <Button className="h-12 rounded-2xl bg-indigo-600 px-6 hover:bg-indigo-500">
          <CalendarCheck className="mr-2 h-5 w-5" />
          Mark Attendance
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-slate-500">
                Total Present
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                1,120
              </h2>
            </div>

            <div className="rounded-2xl bg-emerald-100 p-4">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-slate-500">
                Absent
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                85
              </h2>
            </div>

            <div className="rounded-2xl bg-red-100 p-4">
              <XCircle className="h-7 w-7 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-slate-500">
                Late
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                45
              </h2>
            </div>

            <div className="rounded-2xl bg-amber-100 p-4">
              <Clock3 className="h-7 w-7 text-amber-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-slate-500">
                Attendance Rate
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                92%
              </h2>
            </div>

            <div className="rounded-2xl bg-indigo-100 p-4">
              <CalendarCheck className="h-7 w-7 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance List */}
      <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <CardContent className="p-6">
          {/* Search */}
          <div className="relative mb-6 max-w-md">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

            <Input
              placeholder="Search students..."
              className="h-12 rounded-2xl border-slate-200 bg-slate-50 pl-12"
            />
          </div>

          {/* List */}
          <div className="space-y-4">
            {attendance.map((student) => (
              <div
                key={student.name}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {student.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {student.course}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Badge
                    className={
                      student.status === "Present"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                        : student.status === "Absent"
                        ? "bg-red-100 text-red-700 hover:bg-red-100"
                        : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                    }
                  >
                    {student.status}
                  </Badge>

                  <div className="rounded-xl bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                    {student.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}