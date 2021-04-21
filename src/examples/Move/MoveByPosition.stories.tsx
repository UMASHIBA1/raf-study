import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import MoveByPosition from "./MoveByPosition";

export default {
    title: "MoveByPosition",
    component: MoveByPosition
} as Meta;

const Template: Story<ComponentProps<typeof MoveByPosition>> = (args) => <MoveByPosition {...args} />;

export const MoveByPosition1 = Template.bind({});
