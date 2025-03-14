"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // In a real app, you would send this to your API
    console.log("Submitting email:", email)
    setSubmitted(true)
    setError("")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 shadow-2xl">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors">
          <X size={20} />
        </button>

        <div className="space-y-6">
          {!submitted ? (
            <>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Join the Useless beta</h2>
                <p className="text-gray-400">
                  Be the first to write completely Useless code. We'll notify you when our beta compiler is ready to
                  ignore your syntax errors.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="smartdev@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </div>

                <Button type="submit" className="w-full h-12 bg-white text-black hover:bg-white/90">
                  Write Useless code
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center">
                By joining, you agree that your code will be completely Useless, and that's the point.
              </p>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">You're Uselessly enlisted!</h2>
              <p className="text-gray-400">
                Congratulations on your first Useless decision. We'll notify you when it's time to write code that
                elegantly does nothing.
              </p>
              <Button onClick={onClose} className="mt-4 bg-white/10 hover:bg-white/20 text-white">
                Back to being productive
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

