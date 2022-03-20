import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pad from "../components/atoms/Pad/Pad";

export default {
  title: "Components/Pad",
  component: Pad,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Pad>;

const Template: ComponentStory<typeof Pad> = (args) => <Pad {...args} />;

export const StartPad = Template.bind({});

const audio = new Audio("./loop1.mp3");
StartPad.args = {
  onPress: () => {},
  pad: {
    id: "1",
    active: false,
    isPlaying: false,
    audio: audio,
  },
};

export const ActivePad = Template.bind({});
ActivePad.args = {
  onPress: () => {},
  pad: {
    id: "1",
    active: true,
    isPlaying: false,
    audio: audio,
  },
};

export const PlayingPad = Template.bind({});
PlayingPad.args = {
  onPress: () => {},
  pad: {
    id: "1",
    active: true,
    isPlaying: true,
    audio: audio,
  },
};
