
import { externalLinks } from "@/lib/constants";
import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-hero-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">
                Monarch<span className="text-monarch-purple">ORM</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A type-safe MongoDB ODM for TypeScript developers. 
              Elegantly model and query your data with full type safety.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Documentation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/docs/quick-start" className="hover:text-foreground transition-colors">Getting Started</Link>
              </li>
              <li>
                <Link href="/docs/references/schema-types" className="hover:text-foreground transition-colors">API Reference</Link>
              </li>
              <li>
                <Link href="/docs/examples" className="hover:text-foreground transition-colors">Examples</Link>
              </li>
              <li>
                <Link href="/docs/more/migration/mongoose" className="hover:text-foreground transition-colors">Migrations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">Discord</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">Contributors</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} MonarchORM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
