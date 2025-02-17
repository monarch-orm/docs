import { cva, VariantProps } from "class-variance-authority";
import React from "react";


interface SectionHeaderProps extends VariantProps<typeof sectionHeaderVariants> {
  title: string;
  subtitle?: string;
}


const sectionHeaderVariants = cva(
  "",
  {
    variants: {
      variant: {
        default:
          "text-white",
        light:
          "text-black",
      },
      position: {
        left: "text-left md:text-center",
        center: "text-center"
      }
    },
    defaultVariants: {
      variant: "default",
      position: "center"
    },
  }
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, variant, position }) => {
  return (
    <div className="relative md:mx-auto max-w-xl mb-2 md:mb-8">
      <h2 className={sectionHeaderVariants({ className: "text-[2.3rem] leading-[3.25rem] font-semibold md:font-bold sm:text-4xl md:text-5xl", variant, position })}>{title}</h2>
      {subtitle && <p className={sectionHeaderVariants({ className: "text-2xl md:text-lg mt-4 text-[#505050]", variant, position })}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
