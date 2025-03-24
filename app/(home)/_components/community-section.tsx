
import { externalLinks } from "@/lib/constants";
import { Github, MessageCircle, Users, BookOpen } from "lucide-react";

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  color?: string;
}

function CommunityCard({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  color = "bg-muted",
}: CommunityCardProps) {
  return (
    <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-md">
      <div className={`inline-flex items-center justify-center p-3 ${color} rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <a
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
      >
        {buttonText} →
      </a>
    </div>
  );
}

export function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-header font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help, share ideas, and collaborate with other developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CommunityCard
            icon={<Github className="h-6 w-6 text-foreground" />}
            title="GitHub"
            description="Star the repo, report issues, and contribute to the codebase."
            buttonText="View Repository"
            buttonHref={externalLinks.github}
            color="bg-[#333]/10"
          />

          {/* <CommunityCard
            icon={<MessageCircle className="h-6 w-6 text-[#5865F2]" />}
            title="Discord"
            description="Join our Discord server to chat with the community and get help."
            buttonText="Join Discord"
            buttonHref="#"
            color="bg-[#5865F2]/10"
          /> */}

          <CommunityCard
            icon={<BookOpen className="h-6 w-6 text-monarch-purple" />}
            title="Documentation"
            description="Explore our comprehensive guides, tutorials, and API references."
            buttonText="Read Docs"
            buttonHref="/docs"
            color="bg-monarch-purple/10"
          />

          {/* <CommunityCard
            icon={<Users className="h-6 w-6 text-monarch-blue" />}
            title="Contributors"
            description="Learn how to contribute to MonarchORM and help us improve."
            buttonText="Contribution Guide"
            buttonHref="#"
            color="bg-monarch-blue/10"
          /> */}
        </div>
      </div>
    </section>
  );
}
