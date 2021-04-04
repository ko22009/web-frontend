import React from "react";
import { Story, Meta } from "@storybook/react";

import { Page, PageProps } from "./Page";
import * as HeaderStories from "../components/Header.stories";

export default {
  title: "Pages/Main",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Auth = Template.bind({});
Auth.args = {
  ...HeaderStories.Auth.args,
};
