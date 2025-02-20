import Hero from './_components/hero';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Database, Rocket, Shield, Sparkles, Zap } from 'lucide-react';
import FeatureCard from './_components/feature-card';
import ComparisonRow from './_components/comparison-row';
import AnimatedCodeSnippet from './_components/animated-code-snippet';

export default function HomePage() {
  return (
    <main className='-mt-14'>
      <Hero/>
      {/* <Hero2/> */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
       
        <div className="lg:w-1/2 relative">
          <div className="code-window w-full max-w-2xl mx-auto">
            <div className="code-window-header">
              <div className="flex space-x-2">
                <div className="code-dot code-dot-red"></div>
                <div className="code-dot code-dot-yellow"></div>
                <div className="code-dot code-dot-green"></div>
              </div>
            </div>
            <div className="p-4 text-sm">
          <AnimatedCodeSnippet/>
              
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="section w-full  mt-0 relative">
        <div className='flex flex-wrap gap-8'>
      
          <div>
            <h3>Lean and Efficient</h3>
            <p>No unnecessary overhead, just the features you need.</p>
          </div>
          <div>
            <h3>Framework-Agnostic</h3>
            <p>Seamlessly integrates with any framework in the JavaScript ecosystem.</p>
          </div>
          <div>
            <h3>Dedicated Browser Data Visualizer</h3>
            <p>Gain insights and debug faster with a built-in data visualizer.</p>
          </div>
        </div>

      </section> */}
      <section className="container mx-auto px-4 py-20 mb-32">
        <h2 className="section-header">Why Choose Monarch?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8 stroke-1" />}
            title="Lightning Fast"
            description="Optimized queries and efficient caching for blazing-fast performance."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 stroke-1" />}
            title="Type-Safe"
            description="Full TypeScript support with static type checking for your MongoDB schemas."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8 stroke-1" />}
            title="Developer Friendly"
            description="Intuitive API with excellent IDE support for a smooth development experience."
          />
          <FeatureCard
            icon={<Database className="h-8 w-8 stroke-1" />}
            title="Seamless Integration"
            description="Define complex schemas with ease, including nested objects and arrays."
          />
          <FeatureCard
            icon={<Sparkles className="h-8 w-8 stroke-1" />}
            title="Auto-completion"
            description="Enjoy intelligent auto-completion for your models and queries."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 stroke-1" />}
            title="Easy Migration"
            description="Seamlessly migrate from other ORMs with our compatibility layer."
          />
        </div>
      </section>
      {/* <section className="section w-full  mt-0 relative">
      <h2>Speed That Surpasses Expectations</h2>
      <p>Our ORM is meticulously optimized for high performance. Compare it to the leading ORMs like Mongoose and Prisma, and see how it consistently outperforms in query execution, startup time, and memory usage.</p>
      </section> */}
      <section className="container mx-auto px-4 py-20 mb-32">
        <h2 className="section-header">Unmatched Speed</h2>
        <div className="flex flex-col gap-12 items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <p className="text-xl mb-8 text-muted-foreground">
              Monarch ORM outperforms other popular ODMs and ORMs, providing lightning-fast query execution and minimal overhead.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 text-right mr-4 text-nowrap">Monarch ORM</div>
                <div className="w-full bg-secondary/30">
                  <div className="bg-accent h-4" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-right mr-4">Prisma</div>
                <div className="w-full bg-secondary/30">
                  <div className="bg-gray-400/60 h-4" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-right mr-4">Mongoose</div>
                <div className="w-full bg-secondary/30">
                  <div className="bg-gray-400/30 h-4" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* <Cpu className="w-64 h-64 text-primary animate-spin-slow" /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold neon-text">2x Faster</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32 relative overflow-hidden">
        <div className="container max-w-screen-lg mx-auto px-4">
          <h2 className="section-header">Monarch ORM vs. Others</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Features</th>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Monarch ORM</th>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Mongoose</th>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Prisma</th>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Drizzle</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  feature="Type Safety"
                  monarch={true}
                  mongoose={false}
                  prisma={true}
                  drizzle={true}
                />
                <ComparisonRow
                  feature="MongoDB Support"
                  monarch={true}
                  mongoose={true}
                  prisma={true}
                  drizzle={false}
                />
                <ComparisonRow
                  feature="Query Performance"
                  monarch={true}
                  mongoose={false}
                  prisma={false}
                  drizzle={true}
                />
                <ComparisonRow
                  feature="Schema Flexibility"
                  monarch={true}
                  mongoose={true}
                  prisma={false}
                  drizzle={true}
                />
                <ComparisonRow
                  feature="IDE Autocompletion"
                  monarch={true}
                  mongoose={false}
                  prisma={true}
                  drizzle={true}
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

{/*       

      <section className="section w-full  mt-0 relative">
      <h2>When should you really use Monarch?</h2>
      <p>Lol. Everytime you use MongoDB.</p>
      <p>Monarch is perfect for every MongoDB project, Whether you're building microservices, a complex enterprise application, or a simple API, our ORM fits your needs. It's designed for projects where speed, reliability, and simplicity are paramount.</p>
      </section> */}
{/* 
      <section className="section w-full  mt-0 relative">
      <h2>Join the amazing Community</h2>
<p>Get the help you need, when you need it. Whether it's through our documentation, GitHub discussions, or community Slack, support is always available.</p>
<div>
Documentation
GitHub Repository
Community Slack/Discord
</div>
      </section> */}
        {/* Ready to Build Faster Section */}
        <section className="mx-auto py-20 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl"></div>
        <div className="relative z-10 text-center">
          <h2 className="section-header tracking-tight text-5xl">Ready to Build Faster?</h2>
          <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Try our ORM today and experience the difference. Whether you&apos;re migrating from another tool or starting fresh, you&apos;ll love the simplicity and speed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="min-w-[200px]">
            Start Building Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Join our Community
            </Button>
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              See the Benchmarks
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container mx-auto px-4 text-center mb-32">
        <h2 className="text-4xl font-bold mb-8 neon-text">Revolutionize Your MongoDB Experience</h2>
        <p className="text-xl mb-12 text-muted-foreground">
          Join thousands of developers who have already made the switch to Monarch ORM.
        </p>
        <Button size="lg">
          Start Building Now
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </section> */}

      {/* Footer */}
      <footer className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Monarch ORM</h3>
              <p className="text-muted-foreground">Empowering developers with type-safe MongoDB interactions.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Examples</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-muted-foreground">
            <p>&copy; 2023 Monarch ORM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
