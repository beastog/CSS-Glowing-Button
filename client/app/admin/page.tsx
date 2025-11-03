"use client";

import { useState, useEffect } from "react";
import { useAdmin } from "@/lib/AdminContext";
import Link from "next/link";

export default function AdminPage() {
  const { isAuthenticated, login, logout } = useAdmin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError("Invalid credentials. Use admin@beastposters.com / admin123");
    } else {
      setError("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Admin Login
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Sign in to access the admin dashboard
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg mb-6 text-sm">
              <p className="font-semibold mb-1">Demo Credentials:</p>
              <p>Email: admin@beastposters.com</p>
              <p>Password: admin123</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="admin@beastposters.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">
              Total Posters
            </h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">
              Total Orders
            </h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">
              Categories
            </h3>
            <p className="text-3xl font-bold text-gray-900">6</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-gray-900">$0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/posters"
            className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition group"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-gray-900 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Manage Posters</h2>
            </div>
            <p className="text-gray-600">
              Add, edit, or delete posters from your collection
            </p>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition group"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-gray-900 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">View Orders</h2>
            </div>
            <p className="text-gray-600">
              Manage customer orders and track shipments
            </p>
          </Link>

          <Link
            href="/admin/categories"
            className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition group"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-gray-900 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
            </div>
            <p className="text-gray-600">
              Manage poster categories and organization
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
