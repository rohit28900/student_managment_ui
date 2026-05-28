import { Plus, Search, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const students = [
  {
    name: "Rohit Singh",
    email: "rohit@gmail.com",
    course: "Computer Science",
    status: "Active",
  },
  {
    name: "Aman Verma",
    email: "aman@gmail.com",
    course: "BCA",
    status: "Active",
  },
  {
    name: "Priya Sharma",
    email: "priya@gmail.com",
    course: "MBA",
    status: "Inactive",
  },
  {
    name: "Anjali Gupta",
    email: "anjali@gmail.com",
    course: "B.Tech",
    status: "Active",
  },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Students
          </h1>

          <p className="mt-2 text-slate-500">
            Manage and monitor all students
          </p>
        </div>

        <Button className="h-12 rounded-2xl bg-indigo-600 px-6 text-white hover:bg-indigo-500">
          <Plus className="mr-2 h-5 w-5" />
          Add Student
        </Button>
      </div>

      {/* Search */}
      <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

              <Input
                placeholder="Search students..."
                className="h-12 rounded-2xl border-slate-200 bg-slate-50 pl-12"
              />
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="h-12 rounded-2xl"
              >
                Filter
              </Button>

              <Button
                variant="outline"
                className="h-12 rounded-2xl"
              >
                Export
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="h-14">
                    Name
                  </TableHead>

                  <TableHead>Email</TableHead>

                  <TableHead>Course</TableHead>

                  <TableHead>Status</TableHead>

                  <TableHead className="text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.email}
                    className="hover:bg-slate-50"
                  >
                    <TableCell className="font-medium text-slate-900">
                      {student.name}
                    </TableCell>

                    <TableCell className="text-slate-600">
                      {student.email}
                    </TableCell>

                    <TableCell>
                      {student.course}
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={
                          student.status === "Active"
                            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100"
                        }
                      >
                        {student.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              Showing 1 to 4 of 1,250 students
            </p>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-xl"
              >
                Previous
              </Button>

              <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-500">
                1
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                2
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}