import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Book, Code, Home, Menu, Terminal, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="grid gap-6 text-sm">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2 font-bold">
                    <Terminal className="h-5 w-5" />
                    <span>Useless</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="grid gap-3">
                  <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <Link href="/docs" className="flex items-center gap-2 font-medium">
                    <Book className="h-4 w-4" />
                    Documentation
                  </Link>
                  <div className="grid gap-2 pl-6">
                    <Link href="/docs/basics/introduction" className="text-muted-foreground hover:text-foreground">
                      Introduction
                    </Link>
                    <Link href="/docs/basics/syntax" className="text-muted-foreground hover:text-foreground">
                      Syntax
                    </Link>
                    <Link href="/docs/basics/variables" className="text-muted-foreground hover:text-foreground">
                      Variables & Types
                    </Link>
                    <Link href="/docs/basics/functions" className="text-muted-foreground hover:text-foreground">
                      Functions
                    </Link>
                    <Link href="/docs/basics/contracts" className="text-muted-foreground hover:text-foreground">
                      Contracts
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Terminal className="h-5 w-5" />
              <span>Useless</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <Link href="/docs" className="font-medium">
              Docs
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/playground">
                <Code className="mr-2 h-4 w-4" />
                Playground
              </Link>
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  )
}

