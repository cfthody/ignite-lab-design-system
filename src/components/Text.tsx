import * as React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ITextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

const Text: React.FunctionComponent<ITextProps> = ({
  size = "md",
  children,
  asChild,
  className,
}: ITextProps) => {
  const Component = asChild ? Slot : "span";

  return (
    <div>
      <Component
        className={clsx(
          "text-gray-100 font-sans",
          {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-md": size === "lg",
          },
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
};

export default Text;
