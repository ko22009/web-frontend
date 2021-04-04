import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "antd";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      type: "inline-radio",
      options: ["small", "middle", "large"],
    },
    type: {
      type: "inline-radio",
      options: ["default", "primary"],
    },
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  size: "middle",
};
