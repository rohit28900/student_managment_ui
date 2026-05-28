import {
  Bell,
  Lock,
  Moon,
  Shield,
  User,
  Globe,
  Database,
  Palette,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your application preferences and security
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Menu */}
        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="space-y-2">
              <button className="flex w-full items-center gap-3 rounded-2xl bg-indigo-50 px-4 py-3 text-left font-medium text-indigo-600">
                <User className="h-5 w-5" />
                Account
              </button>

              <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-600 transition hover:bg-slate-100">
                <Bell className="h-5 w-5" />
                Notifications
              </button>

              <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-600 transition hover:bg-slate-100">
                <Shield className="h-5 w-5" />
                Security
              </button>

              <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-600 transition hover:bg-slate-100">
                <Palette className="h-5 w-5" />
                Appearance
              </button>

              <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-600 transition hover:bg-slate-100">
                <Database className="h-5 w-5" />
                System
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Right Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Account Settings */}
          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Account Settings
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Update your account preferences
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email Notifications
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Receive updates via email
                    </p>
                  </div>

                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Push Notifications
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Get real-time alerts
                    </p>
                  </div>

                  <Switch />
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Dark Mode
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Enable dark appearance
                    </p>
                  </div>

                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Security
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Protect your account and data
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-indigo-100 p-3">
                      <Lock className="h-5 w-5 text-indigo-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Change Password
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Update your login password
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="rounded-xl"
                  >
                    Update
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-emerald-100 p-3">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Two-Factor Authentication
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Add extra account protection
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="rounded-xl"
                  >
                    Enable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Preferences */}
          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  System Preferences
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Configure application settings
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-2xl bg-cyan-100 p-3">
                    <Globe className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Language
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      English (US)
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-2xl bg-amber-100 p-3">
                    <Moon className="h-5 w-5 text-amber-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Theme
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Light Mode
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