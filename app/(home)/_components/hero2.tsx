
// import { IconGithub } from "components/icons";
import { ChevronRight } from "lucide-react";
import LinkItem from "@/components/ui/link-item";
import BgGradient from "@/components/ui/bg-gradient";
import HeroAnimated from "@/components/hero-animated";
import HeroBg2 from "./hero-bg2";
import HeroBg from "./hero-bg";

export default function Hero2() {
  return (
    <>
      <section className=" section min-h-[800px] w-full flex flex-col md:flex-row items-center  mt-0 relative">
       <HeroBg/>

          <div className="relative z-10 max-w-4xl md:-translate-y-[33%]  mr-auto  space-y-4">
            <h1 className="text-sm  text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              <pre className="tracking-tight uppercase">
                Building Monarch Studio
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </pre>
            </h1>
            <HeroAnimated
              header="More Performance in less code"
              headerClassName="ml-2 text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-black dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
              description=""
              descriptionClassName="  "
            >
              <div className="mr-auto text-[0.84rem] ml-2 text-zinc-400 text-left md:text-lg lg:max-w-2xl md:py-5">
                <pre className="tracking-tight uppercase max-w-md md:max-w-3xl text-wrap">
                  Use MongoDB without losing the type safety we all love.
                Experience the perfect balance of speed, type safety, and flexibility.
                </pre>
              </div>
            </HeroAnimated>
            <div className="mr-auto ml-2  flex flex-wrap gap-y-4 items-start justify-start gap-x-3">
              <LinkItem
                href="/docs"
                className="inline-flex rounded-none uppercase font-mono text-white  text-center group items-center w-full justify-center bg-background  border-input border-[1px] hover:bg-white/10 transition-colors sm:w-auto py-6 px-10"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              {/* <LinkItem
                href="https://github.com/princecodes247/monarch"
                variant="shiny"
                className="inline-flex font-mono uppercase tracking-tight rounded-none w-full justify-center items-center gap-x-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-6 px-10"
                target="_blank"
              >
                View Documentation
              </LinkItem> */}
            </div>
          </div>
 

      </section>

    </>
  );
};



