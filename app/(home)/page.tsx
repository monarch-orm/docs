import Hero from './_components/hero2';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Database, Rocket, Shield, Sparkles, Zap } from 'lucide-react';
import FeatureCard from './_components/feature-card';
import ComparisonRow from './_components/comparison-row';
import { Features } from './_components/features';
import { CommunitySection } from './_components/community-section';
import { Footer } from './_components/footer';

export default function HomePage() {
  return (
    <main className='-mt-14'>
      <Hero/>
      <Features/>
      <section className="container mx-auto px-4 py-20 mb-32">
        {/* <h2 className="section-header">Why Choose Monarch?</h2> */}
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
                <div className="rounded-full w-full bg-secondary/30">
                  <div className="rounded-full bg-gradient-to-r from-monarch-purple to-monarch-blue h-3" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-right mr-4">Prisma</div>
                <div className="rounded-full w-full bg-secondary/30">
                  <div className="rounded-full bg-gray-400/60 h-3" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-right mr-4">Mongoose</div>
                <div className="rounded-full w-full bg-secondary/30">
                  <div className="rounded-full bg-gray-400/30 h-3" style={{ width: '60%' }}></div>
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
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Native Driver</th>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Mongoose</th>
                  {/* <th className="p-4 bg-[#101320] md:bg-secondary/50">Prisma</th>
                  <th className="p-4 bg-[#101320] md:bg-secondary/50">Drizzle</th> */}
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  feature="Type Safety"
                  checklist={[true, false, false]}
                />
                <ComparisonRow
                  feature="MongoDB Support"
                  checklist={[true, true, true]}
                />
                <ComparisonRow
                  feature="Query Performance"
                  checklist={[true, true, false]}
                />
                <ComparisonRow
                  feature="Schema Definition"
                  checklist={[true, false, true]}
                />
                <ComparisonRow
                  feature="IDE Autocompletion"
                  checklist={[true, false, false]}
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              See the Benchmarks
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CommunitySection/>
      {/* Footer */}
    <Footer/>
    </main>
  );
}
