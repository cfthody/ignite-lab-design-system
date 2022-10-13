import * as React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface IButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  asChild,
}: IButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <div>
      <Component
        className={clsx(
          "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
        )}
      >
        {children}
      </Component>
    </div>
  );
};

export default Button;
