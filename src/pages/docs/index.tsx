import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Code, FileText, Terminal } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentation</h1>
          <p className="text-xl text-muted-foreground">Comprehensive guides and references for the Useless language.</p>
        </div>
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="basics" className="flex-1">
              Basics
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex-1">
              Advanced
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex-1">
              Tools
            </TabsTrigger>
          </TabsList>
          <TabsContent value="basics" className="mt-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Learn the basics of Useless programming</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/basics/introduction" className="text-primary hover:underline">
                        Introduction to Useless
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/basics/syntax" className="text-primary hover:underline">
                        Syntax Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/basics/variables" className="text-primary hover:underline">
                        Variables & Types
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs/basics/introduction">
                      <Book className="mr-2 h-4 w-4" />
                      Start Learning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Core Concepts</CardTitle>
                  <CardDescription>Essential concepts for Useless development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/basics/functions" className="text-primary hover:underline">
                        Functions
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/basics/contracts" className="text-primary hover:underline">
                        Contracts
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/basics/testing" className="text-primary hover:underline">
                        Testing
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs/basics/functions">
                      <Book className="mr-2 h-4 w-4" />
                      Explore Concepts
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Example Contracts</CardTitle>
                <CardDescription>Ready-to-use code examples for common contract patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Token</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Simple token implementation with transfer functionality.
                    </p>
                    <Button variant="link" size="sm" className="mt-2 px-0">
                      View Example
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Auction</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Simple auction contract with bidding functionality.
                    </p>
                    <Button variant="link" size="sm" className="mt-2 px-0">
                      View Example
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Voting</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Basic voting system with proposal and vote counting.
                    </p>
                    <Button variant="link" size="sm" className="mt-2 px-0">
                      View Example
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="advanced" className="mt-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Concepts</CardTitle>
                  <CardDescription>Take your Useless skills to the next level</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/advanced/state" className="text-primary hover:underline">
                        State Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/advanced/security" className="text-primary hover:underline">
                        Security Patterns
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/advanced/optimization" className="text-primary hover:underline">
                        Optimization Techniques
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs/advanced/state">
                      <Book className="mr-2 h-4 w-4" />
                      Learn Advanced
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Integration</CardTitle>
                  <CardDescription>Connect Useless with other systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/advanced/blockchain" className="text-primary hover:underline">
                        Blockchain Deployment
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/advanced/frontend" className="text-primary hover:underline">
                        Frontend Integration
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/advanced/oracles" className="text-primary hover:underline">
                        Using Oracles
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs/advanced/blockchain">
                      <Code className="mr-2 h-4 w-4" />
                      Integration Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tools" className="mt-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>CLI</CardTitle>
                  <CardDescription>Command-line interface</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/tools/cli/installation" className="text-primary hover:underline">
                        Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/tools/cli/commands" className="text-primary hover:underline">
                        Commands
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/tools/cli/configuration" className="text-primary hover:underline">
                        Configuration
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs/tools/cli">
                      <Terminal className="mr-2 h-4 w-4" />
                      CLI Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Playground</CardTitle>
                  <CardDescription>Online development environment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/tools/playground/features" className="text-primary hover:underline">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/tools/playground/sharing" className="text-primary hover:underline">
                        Sharing Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/tools/playground/examples" className="text-primary hover:underline">
                        Example Library
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/playground">
                      <Code className="mr-2 h-4 w-4" />
                      Open Playground
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>IDE Extensions</CardTitle>
                  <CardDescription>Editor integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/tools/vscode" className="text-primary hover:underline">
                        VS Code Extension
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/tools/intellij" className="text-primary hover:underline">
                        IntelliJ Plugin
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/tools/sublime" className="text-primary hover:underline">
                        Sublime Text Package
                      </Link>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs/tools/vscode">
                      <Code className="mr-2 h-4 w-4" />
                      Editor Setup
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

