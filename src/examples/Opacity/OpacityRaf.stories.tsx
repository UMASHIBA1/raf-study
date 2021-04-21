import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import OpacityRaf from "./OpacityRaf";

export default {
    title: "OpacityRaf",
    compoennt: OpacityRaf
} as Meta;

const Template: Story<ComponentProps<typeof OpacityRaf>> = (args) => <OpacityRaf {...args} />;

export const OpacityRaf1 = Template.bind({});