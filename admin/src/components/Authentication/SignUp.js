"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Signup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match")
      }
      if (formData.email && formData.password) {
        router.push("/login")
      } else {
        throw new Error("Invalid input")
      }
    } catch (err) {
      setError(err.message || "Registration failed")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="mt-2 text-gray-400">Sign up for a new account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

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
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:text-blue-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

