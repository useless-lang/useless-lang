"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Terminal, Mail, Github, BookOpen, Users } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="sticky top-2 z-50 mx-auto w-[98%] rounded-lg border border-white/10 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6" />
              <span className="font-semibold">Useless</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                  Learn
                  <ChevronRight className="h-3 w-3 rotate-90 transition-transform group-hover:rotate-[270deg]" />
                </button>
              </div>
              <Link href="/docs" className="text-sm text-gray-400 hover:text-white">
                Documentation
              </Link>
              {/* <Link href="/playground" className="text-sm text-gray-400 hover:text-white">
                Playground
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Community
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Blog
              </Link> */}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/useless-lang" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
            <Button variant="outline" asChild className="text-sm border-white/20 hover:bg-white/10">
              <Link href="/docs">
                <BookOpen className="mr-2 h-4 w-4" />
                Docs
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight">
              Finally, a truly
              <br />
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                Useless
              </span>{" "}
              language.
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              The world's first programming language designed to be completely Useless. Perfect for developers who want
              to write code that elegantly does nothing.
            </p>
            <div className="space-y-4">
              <Button
                size="lg"
                className="h-12 px-6 bg-white text-black hover:bg-white/90"
                onClick={() => setIsWaitlistOpen(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Join the beta program
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-sm text-gray-400">No installation required. It doesn't work anyway.</div>
              <div className="pt-2">
                <code className="bg-white/5 px-4 py-2 rounded-lg text-sm text-gray-400 font-mono">
                  $ npm install useless-lang --no-actual-functionality
                </code>
              </div>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Code className="h-4 w-4" />
                <span>JavaScript-like syntax</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Terminal className="h-4 w-4" />
                <span>Offline testing</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl opacity-20" />
            <div className="relative bg-[#1C1C1C] rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-black/50 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 text-xs text-gray-400">token.useless</div>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-blue-400">// A simple token contract in Useless</div>
                <div className="text-purple-400">contract Token {"{"}</div>
                <div className="pl-4 text-green-400">// State variables</div>
                <div className="pl-4 text-white">let totalSupply = 1000000;</div>
                <div className="pl-4 text-white">let balances = {"{}"};</div>
                <div className="pl-4 text-white"></div>
                <div className="pl-4 text-green-400">// Constructor</div>
                <div className="pl-4 text-yellow-400">constructor(owner) {"{"}</div>
                <div className="pl-8 text-white">balances[owner] = totalSupply;</div>
                <div className="pl-4 text-yellow-400">{"}"}</div>
                <div className="pl-4 text-white"></div>
                <div className="pl-4 text-green-400">// Transfer tokens</div>
                <div className="pl-4 text-yellow-400">function transfer(to, amount) {"{"}</div>
                <div className="pl-8 text-orange-400">
                  if (balances[msg.sender] {">="} amount) {"{"}
                </div>
                <div className="pl-12 text-white">balances[msg.sender] -= amount;</div>
                <div className="pl-12 text-white">balances[to] = (balances[to] || 0) + amount;</div>
                <div className="pl-12 text-white">return true;</div>
                <div className="pl-8 text-orange-400">{"}"}</div>
                <div className="pl-8 text-white">return false;</div>
                <div className="pl-4 text-yellow-400">{"}"}</div>
                <div className="text-purple-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-gray-400 text-lg">
            Trusted by exactly 0 companies in production. And that's the point.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-center bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent mb-16">
            Perfectly Useless
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 mb-4 flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">JavaScript-like Syntax</h3>
              <p className="text-gray-400">
                Familiar syntax for anyone with JavaScript experience, but with just enough differences to be
                frustrating.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 mb-4 flex items-center justify-center">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Offline Testing</h3>
              <p className="text-gray-400">
                Test your contracts locally without deploying to a blockchain or spending gas. Because it doesn't
                connect to anything.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
              <p className="text-gray-400">
                Clear error messages like "Something went wrong" and "It's not working" make it ideal for beginners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why be productive when you can be <span className="text-yellow-400">Useless</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Elegant Simplicity</h3>
              <p className="text-gray-400">
                Useless embraces minimalism by doing absolutely nothing efficiently. Our compiler is optimized to ignore
                your code with remarkable speed.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <p className="text-gray-300">Write code that looks important</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <p className="text-gray-300">Watch as nothing happens</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <p className="text-gray-300">Celebrate your productivity</p>
                </div>
              </div>

              <Button className="mt-4 bg-white/10 hover:bg-white/20 text-white" onClick={() => setIsWaitlistOpen(true)}>
                Join the revolution
              </Button>
            </div>

            <div className="bg-[#1C1C1C] rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-black/50 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 text-xs text-gray-400">hello.useless</div>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-blue-400">// The most efficient Hello World</div>
                <div className="text-purple-400">contract HelloWorld {"{"}</div>
                <div className="pl-4 text-white">let greeting = "Hello, World!";</div>
                <div className="pl-4 text-white"></div>
                <div className="pl-4 text-yellow-400">function getGreeting() {"{"}</div>
                <div className="pl-8 text-white">return greeting;</div>
                <div className="pl-4 text-yellow-400">{"}"}</div>
                <div className="pl-4 text-white"></div>
                <div className="pl-4 text-yellow-400">function setGreeting(newGreeting) {"{"}</div>
                <div className="pl-8 text-white">greeting = newGreeting;</div>
                <div className="pl-8 text-white">return true; // Always succeeds in doing nothing</div>
                <div className="pl-4 text-yellow-400">{"}"}</div>
                <div className="text-purple-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to write some Useless code?</h2>
            <p className="text-xl text-gray-400">
              Join thousands of developers who are embracing the art of writing code that elegantly does nothing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-6 bg-white text-black hover:bg-white/90"
                onClick={() => setIsWaitlistOpen(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Join the beta
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 border-white/20 hover:bg-white/10" asChild>
                <Link href="/playground">
                  <Code className="mr-2 h-5 w-5" />
                  Try the playground
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Documentation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/basics/introduction" className="text-sm text-gray-400 hover:text-white">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/docs/basics/syntax" className="text-sm text-gray-400 hover:text-white">
                    Syntax Guide
                  </Link>
                </li>
                <li>
                  <Link href="/docs/basics/variables" className="text-sm text-gray-400 hover:text-white">
                    Variables & Types
                  </Link>
                </li>
                <li>
                  <Link href="/docs/basics/functions" className="text-sm text-gray-400 hover:text-white">
                    Functions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Community</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Forum
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Playground
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                <span className="font-semibold">Useless</span>
              </div>
              <div className="text-sm text-gray-400">
                © 2025 Useless Lang. All rights reserved. No functionality guaranteed.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  )
}

