import React from "react";
import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    auth: {
      control: "boolean",
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Auth = Template.bind({});
Auth.args = {};
