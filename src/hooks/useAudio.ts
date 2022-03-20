import { useEffect } from "react";
import { Pad } from "../model/Pad";

const useAudio = (pad: Pad) => {
  useEffect(() => {
    pad.audio.currentTime = 0;
    if (pad.isPlaying) {
      pad.audio.play();
      pad.audio.loop = true;
    } else {
      pad.audio.pause();
    }
  }, [pad.audio, pad.isPlaying]);
};

export default useAudio;
