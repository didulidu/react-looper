import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/atoms/Button/Button";
import { ReactComponent as ButtonPlayIcon } from "../../assets/icons/button_play.svg";
import { ReactComponent as ButtonStopIcon } from "../../assets/icons/button_pause.svg";
import { buttonDimension } from "../pages/Looper/styles";

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
  children: <ButtonPlayIcon {...buttonDimension} />,
};

export const StopButton = Template.bind({});
StopButton.args = {
  onClick: () => {},
  color: "indianred",
  children: <ButtonStopIcon {...buttonDimension} />,
};
