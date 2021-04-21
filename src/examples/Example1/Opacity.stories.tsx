import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import Opacity from "./Opacity";

export default {
    title: "Opacity",
    compoennt: Opacity
} as Meta;

const Template: Story<ComponentProps<typeof Opacity>> = (args) => <Opacity {...args} />;

export const Opacity1 = Template.bind({});