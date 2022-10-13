import * as React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface IHeadingProps {
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const Heading: React.FunctionComponent<IHeadingProps> = ({
  size = "md",
  children,
  asChild,
}: IHeadingProps) => {
  const Component = asChild ? Slot : "h2";

  return (
    <div>
      <Component
        className={clsx("text-gray-100 font-bold font-sans", {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        })}
      >
        {children}
      </Component>
    </div>
  );
};

export default Heading;
