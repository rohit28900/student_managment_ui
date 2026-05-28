import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Pencil,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information
          </p>
        </div>

        <Button className="h-12 rounded-2xl bg-indigo-600 px-6 hover:bg-indigo-500">
          <Pencil className="mr-2 h-5 w-5" />
          Edit Profile
        </Button>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Card */}
        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="flex flex-col items-center p-8 text-center">
            <Avatar className="h-28 w-28 rounded-3xl">
              <AvatarFallback className="rounded-3xl bg-indigo-100 text-3xl font-bold text-indigo-600">
                RS
              </AvatarFallback>
            </Avatar>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Rohit Singh
            </h2>

            <p className="mt-2 text-slate-500">
              System Administrator
            </p>

            <Badge className="mt-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Active
            </Badge>

            <div className="mt-8 w-full space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <Mail className="h-5 w-5 text-indigo-600" />

                <span className="text-sm text-slate-700">
                  rohit@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <Phone className="h-5 w-5 text-indigo-600" />

                <span className="text-sm text-slate-700">
                  +91 9876543210
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <MapPin className="h-5 w-5 text-indigo-600" />

                <span className="text-sm text-slate-700">
                  Prayagraj, India
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Section */}
        <div className="space-y-6 lg:col-span-2">
          {/* Personal Info */}
          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Personal Information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your personal details and account data
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Full Name
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    Rohit Singh
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Role
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    Administrator
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Department
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    Academic Management
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Joined
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    Jan 12, 2024
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity */}
          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Recent Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Latest account actions
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-2xl bg-indigo-100 p-3">
                    <User className="h-5 w-5 text-indigo-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Updated Profile Information
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Profile details were updated successfully
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-2xl bg-emerald-100 p-3">
                    <GraduationCap className="h-5 w-5 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Added New Course
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Created Data Science course successfully
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-2xl bg-amber-100 p-3">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Attendance Updated
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Marked attendance for today's classes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}