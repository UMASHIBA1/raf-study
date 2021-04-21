import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import OpacityCSS from "./OpacityCSS";

export default {
    title: "OpacityCSS",
    component: OpacityCSS
} as Meta;

const Template: Story<ComponentProps<typeof OpacityCSS>> = (args) => <OpacityCSS {...args} />;

export const OpacityCSS1 = Template.bind({});