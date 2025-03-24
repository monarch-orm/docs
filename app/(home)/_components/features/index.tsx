
import React from "react";
import { ArrowRight } from "lucide-react";
import { CodePreview } from "../code-preview";
import { TracingBeam } from "@/components/ui/tracing-beam";

interface FeatureSectionProps {
  title: string;
  description: string;
  details?: string;
  learnMoreLink?: string;
  codeSnippet?: string;
  imageOnRight?: boolean;
}

function FeatureSection({
  title,
  description,
  details,
  learnMoreLink,
  codeSnippet,
  imageOnRight = false,
}: FeatureSectionProps) {
  return (
    <div className="py-24 border-b border-border/30">
      <div className={`container grid grid-cols-1 ${imageOnRight ? 'md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1fr]' : 'md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1fr_1fr]'} gap-8 md:gap-12 items-center`}>
        <div className={`space-y-6 ${imageOnRight ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-monarch-purple to-monarch-blue bg-clip-text text-transparent">{title}</h2>
          <p className="text-xl text-muted-foreground">{description}</p>
          
          {details && (
            <p className="text-muted-foreground">{details}</p>
          )}
          
          {learnMoreLink && (
            <div className="pt-2">
              <a 
                href={learnMoreLink} 
                className="inline-flex items-center text-white hover:text-gray-200 hover:underline gap-1 font-medium transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
        
        <div className={`${imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
          {codeSnippet && (
            <div className="relative group">
              <div className="absolute z-10 -top-5 left-4 px-2 py-1 bg-gradient-to-r from-monarch-purple to-monarch-blue text-white text-sm font-mono rounded-sm">
                {imageOnRight ? "Query" : "Schema"}
              </div>
              <CodePreview 
                code={codeSnippet} 
                language="typescript" 
                showLineNumbers={false} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const typeSchemaSnippet = `import { createSchema, string, number, literal, objectId, createdAt, updatedAt } from "monarch-orm";

const userSchema = createSchema('users', {
  name: string(),
  email: string(),
  age: number(),
  role: literal("admin", "user").default("user"),
  profile: objectId(),
  createdAt: createdAt(),
  updatedAt: updatedAt()
});

// Type-safety guaranteed - no runtime surprises
type User = InferSchemaOutput<typeof userSchema>;

`;
// {
//   _id: ObjectId;
//   name: string;
//   createdAt: Date;
//   updatedAt: Date;
//   age: number;
//   email: string;
//   password: string;
//   role: "user" | "admin";
// }
  const querySnippet = `// All queries are fully type-safe and autocompletable
const users = await collections.users.find({
        role: "admin",
        createdAt: { $gt: new Date("2023-01-01") }
      },
    }).sort({
    createdAt: "desc"
    }).populate({
      profile: true
}).limit(10);
// 'users' is fully typed with proper references`;

  const migrationSnippet = `// Create a new migration
const migration = monarch.createMigration({
  name: "add-verification-fields",
  up: async (db) => {
    await db.updateSchema("users", {
      // Add new fields to existing schema
      fields: {
        isVerified: MonarchSchema.Boolean.default(false),
        verificationToken: MonarchSchema.String.optional(),
      }
    });
    
    // Backfill data if needed
    await db.updateMany({
      collection: "users",
      where: { email: { $contains: "@verified.com" } },
      data: { isVerified: true }
    });
  },
  down: async (db) => {
    // Revert changes safely
    await db.updateSchema("users", {
      remove: ["isVerified", "verificationToken"]
    });
  }
});`;

  return (
    <section id="features" className="bg-gradient-to-br from-transparent via-background to-muted/50 py-20">
    <TracingBeam>
      <FeatureSection
        title="Type safety from schema to query results"
        description="Define your MongoDB schema once, get complete type safety everywhere."
        details="No more type errors at runtime despite using TypeScript. MonarchORM maintains complete type safety from schema definition to query results, providing accurate IntelliSense in your IDE and catching errors before they happen."
        learnMoreLink="/docs/type-safety"
        codeSnippet={typeSchemaSnippet}
        imageOnRight={false}
      />
      
      <FeatureSection
        title="Intuitive queries with zero compromises"
        description="Write MongoDB queries with confidence using autocompletion and validation."
        details="MonarchORM's fluent query builder provides autocomplete for operators and fields, catches errors at compile time, and maintains the full power of MongoDB's query capabilities without sacrificing flexibility."
        learnMoreLink="/docs/queries"
        codeSnippet={querySnippet}
        imageOnRight={true}
      />
      
      <FeatureSection
        title="Painless schema evolution"
        description="Evolve your database schema with confidence using type-safe migrations."
        details="MonarchORM provides tools to safely update schemas, validate existing data, and ensure backward compatibility, making migrations less painful and error-prone."
        learnMoreLink="/docs/migrations"
        codeSnippet={migrationSnippet}
        imageOnRight={false}
      />
    </TracingBeam>
    </section>
  );
}
