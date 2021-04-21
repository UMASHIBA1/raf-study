import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import Example1 from "./Opacity";

export default {
    title: "Example1",
    compoennt: Example1
} as Meta;

const Template: Story<ComponentProps<typeof Example1>> = (args) => <Example1 {...args} />;

export const Example1_1 = Template.bind({});