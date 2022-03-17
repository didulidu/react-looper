import { Pad } from "../../../model/Pad";

export type PadProps = {
  pad: Pad;
  onPress: (id: string) => void;
};

export type StyledPadProps = { isPressed: boolean; isPlaying: boolean };
