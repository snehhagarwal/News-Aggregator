"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    //auth
    try {
      if (formData.email && formData.password) {
        router.push("/dashboard")
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (err) {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-400">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-400">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

