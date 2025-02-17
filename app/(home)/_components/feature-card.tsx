import { ReactNode } from "react";

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
    return (
      <div className="feature-card group">
        <div className="feature-icon-wrapper">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    );
  }

  export default FeatureCard;