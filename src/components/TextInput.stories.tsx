import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { ITextInputRoot, TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Escreva email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRoot>;

export const Default: StoryObj<ITextInputRoot> = {};
