import { FC, memo } from "react";
import { ReactComponent as Playing } from "../../../assets/icons/playing.svg";
import { ReactComponent as Play } from "../../../assets/icons/play.svg";
import { ReactComponent as WillPlay } from "../../../assets/icons/will_play.svg";
import { PadProps } from "./types";
import { iconDimension, StyledPad } from "./styles";
import useAudio from "../../../hooks/useAudio";

const Pad: FC<PadProps> = ({ pad, onPress }) => {
  useAudio(pad);
  const Icon = pad.active ? (pad.isPlaying ? Playing : WillPlay) : Play;

  return (
    <>
      <StyledPad
        onClick={() => onPress(pad.id)}
        isPressed={pad.active}
        isPlaying={pad.isPlaying}
        aria-label="Pad"
      >
        <Icon {...iconDimension} />
      </StyledPad>
    </>
  );
};

export default memo(Pad, (prevProps, nextProps) => {
  return (
    prevProps.pad.active === nextProps.pad.active &&
    prevProps.pad.isPlaying === nextProps.pad.isPlaying
  );
});
