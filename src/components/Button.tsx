import * as React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  asChild,
  className,
  ...props
}: IButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
