import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/atoms/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const PlayButton = Template.bind({});
PlayButton.args = {
  onClick: () => {},
  color: "lightblue",
  children: "Play",
};

export const StopButton = Template.bind({});
StopButton.args = {
  onClick: () => {},
  color: "indianred",
  children: "Stop",
};
