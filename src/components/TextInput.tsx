import clsx from "clsx";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface IInputTextIconProps {
  children: React.ReactNode;
}
const TextInputIcon = ({ children }: IInputTextIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = "TextInputIcon";

export interface ITextInputRoot {
  children: React.ReactNode;
}
const TextInputRoot = ({ children }: ITextInputRoot) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
};

export interface ITextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput: React.FunctionComponent<ITextInputInputProps> = (
  props: ITextInputInputProps
) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
