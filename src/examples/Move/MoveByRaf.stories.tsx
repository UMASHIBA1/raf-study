import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import MoveByRaf from "./MoveByRaf";

export default {
    title: "MoveByRaf",
    component: MoveByRaf
} as Meta;

const Template: Story<ComponentProps<typeof MoveByRaf>> = (args) => <MoveByRaf {...args} />;

export const MoveByRaf1 = Template.bind({});
