"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { GraduationCap, Loader2 } from "lucide-react";

import { api } from "@/services/api";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("rohit@test.com");

  const [password, setPassword] = useState("test123");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      // Save token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      // Redirect
      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      {/* Card */}
      <Card className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <CardHeader className="space-y-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>

          <div>
            <CardTitle className="text-4xl font-bold tracking-tight text-slate-900">
              Student ERP
            </CardTitle>

            <CardDescription className="mt-2 text-slate-500">
              Login to access your dashboard
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {/* Error */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                className="h-12 rounded-2xl border-slate-200 bg-slate-50"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                className="h-12 rounded-2xl border-slate-200 bg-slate-50"
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-base font-semibold text-white hover:opacity-90"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}