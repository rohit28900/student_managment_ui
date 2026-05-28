"use client";

import { useState } from "react";
import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  ArrowUpRight,
  UserPlus,
  ClipboardCheck,
  PlusCircle,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  {
    title: "Total Students",
    value: "1,250",
    icon: Users,
    growth: "+12%",
    color: "blue",
  },
  {
    title: "Courses",
    value: "24",
    icon: GraduationCap,
    growth: "+4%",
    color: "teal",
  },
  {
    title: "Assignments",
    value: "86",
    icon: BookOpen,
    growth: "+18%",
    color: "amber",
  },
  {
    title: "Performance",
    value: "92%",
    icon: TrendingUp,
    growth: "+8%",
    color: "purple",
  },
];

const enrollmentData = [
  { month: "Jan", students: 980, score: 84 },
  { month: "Feb", students: 1020, score: 86 },
  { month: "Mar", students: 1080, score: 87 },
  { month: "Apr", students: 1120, score: 89 },
  { month: "May", students: 1190, score: 91 },
  { month: "Jun", students: 1250, score: 92 },
];

const performanceData = [
  { month: "Jan", students: 80, score: 84 },
  { month: "Feb", students: 83, score: 86 },
  { month: "Mar", students: 85, score: 87 },
  { month: "Apr", students: 88, score: 89 },
  { month: "May", students: 90, score: 91 },
  { month: "Jun", students: 92, score: 92 },
];

const activities = [
  {
    group: "Today",
    items: [
      {
        icon: UserPlus,
        color: "green",
        title: "New student added",
        desc: "Aman Verma joined Computer Science",
        time: "2 hours ago",
      },
      {
        icon: ClipboardCheck,
        color: "blue",
        title: "Attendance updated",
        desc: "Today's attendance marked successfully",
        time: "4 hours ago",
      },
    ],
  },
  {
    group: "Yesterday",
    items: [
      {
        icon: PlusCircle,
        color: "amber",
        title: "New course created",
        desc: "Data Science course added to catalogue",
        time: "Yesterday, 3:41 PM",
      },
    ],
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────

const accentLine: Record<string, string> = {
  blue:   "bg-blue-500",
  teal:   "bg-emerald-500",
  amber:  "bg-amber-500",
  purple: "bg-violet-500",
};

const iconBg: Record<string, string> = {
  blue:   "bg-blue-50 text-blue-700",
  teal:   "bg-emerald-50 text-emerald-700",
  amber:  "bg-amber-50 text-amber-700",
  purple: "bg-violet-50 text-violet-700",
};

const activityIconBg: Record<string, string> = {
  green: "bg-emerald-50 text-emerald-700",
  blue:  "bg-blue-50 text-blue-700",
  amber: "bg-amber-50 text-amber-700",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [tab, setTab] = useState<"enroll" | "perf">("enroll");
  const chartData = tab === "enroll" ? enrollmentData : performanceData;
  const barLabel  = tab === "enroll" ? "Students Enrolled" : "Assignments Done";

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">

      {/* ── Header ── */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Welcome back — here's what's happening today.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <div>
            <p className="text-[11px] uppercase tracking-widest text-slate-400">
              Academic Year
            </p>
            <p className="text-sm font-semibold text-slate-900">2025 – 2026</p>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* top accent */}
              <div
                className={cn("absolute inset-x-0 top-0 h-0.5", accentLine[item.color])}
              />
              <CardContent className="p-5">
                {/* icon */}
                <div
                  className={cn(
                    "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg",
                    iconBg[item.color]
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  {item.title}
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
                  {item.value}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="gap-0.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    {item.growth}
                  </Badge>
                  <span className="text-xs text-slate-400">this month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* ── Bottom section ── */}
      <div className="grid gap-4 lg:grid-cols-3">

        {/* Analytics card */}
        <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
          <CardContent className="p-6">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  Student Analytics
                </h2>
                <p className="mt-0.5 text-sm text-slate-500">
                  Growth and performance over 6 months
                </p>
              </div>

              {/* Tabs */}
              <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
                {(["enroll", "perf"] as const).map((t) => (
                  <Button
                    key={t}
                    size="sm"
                    variant="ghost"
                    onClick={() => setTab(t)}
                    className={cn(
                      "h-7 rounded-md px-3 text-xs font-medium transition-all",
                      tab === t
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    {t === "enroll" ? "Enrolment" : "Performance"}
                  </Button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={220}>
              <ComposedChart data={chartData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="#f1f5f9" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[78, 100]}
                  tick={{ fontSize: 11, fill: "#10b981" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    fontSize: 13,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  }}
                  cursor={{ fill: "rgba(0,0,0,0.03)" }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="students"
                  name={barLabel}
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth={1}
                  radius={[5, 5, 0, 0]}
                  maxBarSize={40}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="score"
                  name="Avg Score (%)"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: "#10b981", r: 4, strokeWidth: 2, stroke: "#fff" }}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="mt-4 flex gap-5">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                {barLabel}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Avg Score (%)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity card */}
        <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Recent Activity
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              Latest system updates
            </p>

            <div className="mt-5 space-y-4">
              {activities.map((group) => (
                <div key={group.group}>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-slate-400">
                    {group.group}
                  </p>
                  <div className="space-y-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex gap-3 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-slate-100"
                        >
                          <div
                            className={cn(
                              "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
                              activityIconBg[item.color]
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {item.title}
                            </p>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                            <p className="mt-1 text-[11px] text-slate-400">
                              {item.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}