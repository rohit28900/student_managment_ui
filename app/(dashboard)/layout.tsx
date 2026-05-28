"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarCheck,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/students",
    icon: Users,
  },
  {
    title: "Courses",
    href: "/course",
    icon: GraduationCap,
  },
  {
    title: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
        {/* Logo */}
        <div className="border-b border-slate-200 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Student ERP
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Management Dashboard
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 rounded-2xl">
                <AvatarFallback className="rounded-2xl bg-indigo-100 font-semibold text-indigo-600">
                  RS
                </AvatarFallback>
              </Avatar>

              <div>
                <h2 className="font-semibold text-slate-900">
                  Rohit Singh
                </h2>

                <p className="text-sm text-slate-500">
                  Administrator
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
            >
              <LogOut className="h-5 w-5 text-slate-500" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72 p-0">
              <div className="border-b border-slate-200 p-6">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Student ERP
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  Management Dashboard
                </p>
              </div>

              <nav className="space-y-2 p-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;

                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" />

                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Title */}
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Student Management System
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden rounded-2xl md:flex"
            >
              Export Data
            </Button>

            <Avatar className="h-11 w-11 rounded-2xl">
              <AvatarFallback className="rounded-2xl bg-indigo-100 font-semibold text-indigo-600">
                RS
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}