import React from "react";
import { Story, Meta } from "@storybook/react";
import DragAndDrop from "@/components/DragAndDrop";

export default {
  title: "components/DragAndDrop",
  component: DragAndDrop,
} as Meta;

const Template: Story = () => <DragAndDrop />;

export const Default = Template.bind({});
Default.args = {};
