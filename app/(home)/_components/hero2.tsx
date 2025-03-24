
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodePreview } from "./code-preview";
import Link from "next/link";
import { externalLinks } from "@/lib/constants";

const codeExample = `import { createSchema, createClient, createDatabase, string, number, createdAt } from 'monarch-orm';

// Define your schema with full type safety
const users = createSchema('users', {
  name: string(),
  email: string(),
  age: number(),
  createdAt: createdAt()
});

// Create a client and connect to your MongoDB database
const client = createClient('mongodb://localhost:27017/my-database');
const { collections } = createDatabase(client, { users });

// Query with type-safe methods
const users = await collections.users
  .find({ age: { $gte: 21 } })
  .sort({ createdAt: -1 })
  .limit(10);
`;

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-hero-glow opacity-30"></div>
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div 
          className="relative aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-monarch-purple to-monarch-blue opacity-20"
          style={{
            left: "calc(50% + 3rem)",
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <div className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6 animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
              Type-safe MongoDB ODM for TypeScript
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
              <span className="text-gradient">Monarch</span>ORM
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
              {/* Elegant, type-safe MongoDB object modeling for TypeScript developers. 
              Inspired by Prisma and Drizzle, designed for MongoDB. */}
              Use MongoDB without losing the type safety we all love.
              Experience the perfect balance of speed, type safety, and flexibility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
              <Button size="lg" className="button-glow gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Link href={externalLinks.github}>
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="h-4 w-4" /> View on GitHub
              </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl lg:max-w-none animate-fade-in opacity-0" style={{ animationDelay: "500ms" }}>
            <CodePreview 
              code={codeExample} 
              title="models/user.ts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
