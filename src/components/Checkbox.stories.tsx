import { Meta, StoryObj } from "@storybook/react";
import Checkbox, { ICheckboxProps } from "./Checkbox";
import Text from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Continue your dashboard dev</Text>
        </div>
      );
    },
  ],
} as Meta<ICheckboxProps>;

export const Default: StoryObj<ICheckboxProps> = {};