import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Book, Code, Copy } from "lucide-react"

export default function IntroductionPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
        <aside className="hidden md:block">
          <div className="sticky top-20 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">On This Page</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#what-is-useless" className="text-muted-foreground hover:text-foreground">
                    What is Useless?
                  </Link>
                </li>
                <li>
                  <Link href="#why-useless" className="text-muted-foreground hover:text-foreground">
                    Why Useless?
                  </Link>
                </li>
                <li>
                  <Link href="#key-features" className="text-muted-foreground hover:text-foreground">
                    Key Features
                  </Link>
                </li>
                <li>
                  <Link href="#getting-started" className="text-muted-foreground hover:text-foreground">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="#hello-world" className="text-muted-foreground hover:text-foreground">
                    Hello World Example
                  </Link>
                </li>
              </ul>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-medium">Next Steps</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs/basics/syntax" className="text-muted-foreground hover:text-foreground">
                    Syntax Guide
                  </Link>
                </li>
                <li>
                  <Link href="/docs/basics/variables" className="text-muted-foreground hover:text-foreground">
                    Variables & Types
                  </Link>
                </li>
                <li>
                  <Link href="/docs/basics/functions" className="text-muted-foreground hover:text-foreground">
                    Functions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="min-w-0">
          <div className="space-y-2">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/docs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Docs
              </Link>
            </Button>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction to Useless</h1>
            <p className="text-xl text-muted-foreground">Learn the basics of the Useless smart contract language.</p>
          </div>
          <Separator className="my-6" />
          <div className="space-y-10">
            <section id="what-is-useless" className="space-y-4">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is Useless?</h2>
              <p>
                Useless is a smart contract programming language designed to be simple to learn, especially for
                beginners. It features JavaScript-like syntax and can be tested offline without connecting to a
                blockchain.
              </p>
              <p>
                Unlike other smart contract languages that require specialized knowledge of blockchain concepts, Useless
                aims to make smart contract development accessible to web developers who are already familiar with
                JavaScript.
              </p>
            </section>
            <section id="why-useless" className="space-y-4">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Why Useless?</h2>
              <p>
                The name "Useless" is tongue-in-cheek, as the language is actually quite useful for learning and
                developing smart contracts. It was created to address several pain points in the smart contract
                development ecosystem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Steep learning curve</strong> of existing languages like Solidity
                </li>
                <li>
                  <strong>High cost of mistakes</strong> when testing on actual blockchains
                </li>
                <li>
                  <strong>Unfamiliar syntax</strong> for developers coming from web development
                </li>
                <li>
                  <strong>Lack of offline testing</strong> capabilities in many smart contract platforms
                </li>
              </ul>
              <p>By addressing these issues, Useless provides a gentle on-ramp to smart contract development.</p>
            </section>
            <section id="key-features" className="space-y-4">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">JavaScript-like Syntax</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Familiar syntax for anyone with JavaScript experience, making it easy to get started.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Offline Testing</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Test your contracts locally without deploying to a blockchain or spending gas.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Beginner Friendly</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Clear error messages and simplified concepts make it ideal for beginners.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Blockchain Agnostic</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contracts can be compiled to target different blockchain platforms.
                  </p>
                </div>
              </div>
            </section>
            <section id="getting-started" className="space-y-4">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Getting Started</h2>
              <p>To get started with Useless, you'll need to install the Useless CLI. You can do this using npm:</p>
              <div className="relative rounded-lg bg-muted p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  aria-label="Copy code"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">{`npm install -g useless-cli`}</code>
                </pre>
              </div>
              <p>Once installed, you can create a new Useless project:</p>
              <div className="relative rounded-lg bg-muted p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  aria-label="Copy code"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">
                    {`useless init my-first-contract
cd my-first-contract`}
                  </code>
                </pre>
              </div>
              <p>Alternatively, you can try Useless directly in your browser using the online playground:</p>
              <Button asChild>
                <Link href="/playground">
                  <Code className="mr-2 h-4 w-4" />
                  Try Useless Online
                </Link>
              </Button>
            </section>
            <section id="hello-world" className="space-y-4">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Hello World Example</h2>
              <p>Here's a simple "Hello World" contract in Useless:</p>
              <div className="relative rounded-lg bg-muted p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  aria-label="Copy code"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">
                    {`// HelloWorld.useless
contract HelloWorld {
  // State variable to store the greeting
  let greeting = "Hello, World!";
  
  // Function to get the greeting
  function getGreeting() {
    return greeting;
  }
  
  // Function to set a new greeting
  function setGreeting(newGreeting) {
    greeting = newGreeting;
    return true;
  }
}`}
                  </code>
                </pre>
              </div>
              <p>To compile and test this contract:</p>
              <div className="relative rounded-lg bg-muted p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  aria-label="Copy code"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">
                    {`// Save the contract to HelloWorld.useless
useless compile HelloWorld.useless
useless test HelloWorld.useless`}
                  </code>
                </pre>
              </div>
              <p>You can also write a simple test script:</p>
              <div className="relative rounded-lg bg-muted p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  aria-label="Copy code"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">
                    {`// HelloWorld.test.js
const HelloWorld = require('./HelloWorld.useless');

// Create an instance of the contract
const contract = new HelloWorld();

// Test the initial greeting
console.log(contract.getGreeting()); // Should output: "Hello, World!"

// Test setting a new greeting
contract.setGreeting("Hello, Useless!");
console.log(contract.getGreeting()); // Should output: "Hello, Useless!"`}
                  </code>
                </pre>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild>
                  <Link href="/docs/basics/syntax">
                    Next: Syntax Guide
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs/basics">
                    <Book className="mr-2 h-4 w-4" />
                    Basics Guide
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/playground">
                    <Code className="mr-2 h-4 w-4" />
                    Try in Playground
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

