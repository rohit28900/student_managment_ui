import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Student Management System
      </h1>

      <Link
        href="/login"
        className="rounded-xl bg-black px-6 py-3 text-white"
      >
        Go to Login
      </Link>
    </div>
  );
}