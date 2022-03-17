import { FC, memo, useEffect } from "react";
import { ReactComponent as Playing } from "../../../assets/icons/playing.svg";
import { ReactComponent as Play } from "../../../assets/icons/play.svg";
import { ReactComponent as WillPlay } from "../../../assets/icons/will_play.svg";
import { PadProps } from "./types";
import { StyledPad } from "./styles";

const Pad: FC<PadProps> = ({ pad, onPress }) => {
  useEffect(() => {
    pad.audio.currentTime = 0;
    if (pad.isPlaying) {
      pad.audio.play();
      pad.audio.loop = true;
    } else {
      pad.audio.pause();
    }
  }, [pad.audio, pad.isPlaying]);

  const Icon = pad.active ? (pad.isPlaying ? Playing : WillPlay) : Play;

  return (
    <>
      <StyledPad
        onClick={() => onPress(pad.id)}
        isPressed={pad.active}
        isPlaying={pad.isPlaying}
      >
        <Icon width="100px" height="100px" />
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
