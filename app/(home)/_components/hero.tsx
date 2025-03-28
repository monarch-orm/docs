import { ChevronRight } from "lucide-react";
import LinkItem from "@/components/ui/link-item";
import HeroAnimated from "@/components/hero-animated";
import HeroBg from "./hero-bg";

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden section min-h-[700px] w-full flex flex-col justify-center items-center  mt-0 relative">
       <HeroBg/>

          <div className="relative z-10 max-w-4xl text-center  space-y-4">
            <h2 className="text-sm  text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              <pre className="tracking-tight uppercase">
                Building Monarch Studio
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </pre>
            </h2>
            <HeroAnimated
              header="More Performance in less code"
              headerClassName="text-center max-w-md md:max-w-4xl text-3xl md:text-4xl tracking-tighter lg:text-7xl font-geist font-normal  text-transparent bg-clip-text bg-black dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
              description=""
              descriptionClassName="  "
            >
              <div className=" text-[0.84rem] text-zinc-400 text-center md:text-lg lg:max-w-2xl md:py-5">
                <pre className="tracking-tight uppercase max-w-md md:max-w-3xl text-wrap">
                  Use MongoDB without losing the type safety we all love.
                Experience the perfect balance of speed, type safety, and flexibility.
                </pre>
              </div>
            </HeroAnimated>
            <div className="mx-auto ml-2  flex flex-wrap gap-y-4 items-center justify-center gap-x-3">
              <LinkItem
                href="/docs"
                className="inline-flex rounded-none uppercase font-mono text-white  text-center group items-center w-full justify-center bg-background  border-input border-[1px] hover:bg-white/10 transition-colors sm:w-auto py-6 px-10"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              {/* <LinkItem
                href={externalLinks.github}
                variant="shiny"
                className="inline-flex font-mono uppercase tracking-tight rounded-none w-full justify-center items-center gap-x-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-6 px-10"
                target="_blank"
              >
                View Documentation
              </LinkItem> */}
            </div>
          </div>
 
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

      </section>

    </>
  );
};



