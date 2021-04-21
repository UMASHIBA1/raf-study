import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import MoveByTransform from "./MoveByTransform";

export default {
    title: "MoveByTransform",
    component: MoveByTransform
} as Meta;

const Template: Story<ComponentProps<typeof MoveByTransform>> = (args) => <MoveByTransform {...args} />;

export const MoveByTransform1 = Template.bind({});
