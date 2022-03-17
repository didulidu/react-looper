import { Pad } from "../../model/Pad";

export const updatePads = (pads: Pad[]) => {
  return pads.map((pad) => {
    pad.audio.currentTime = 0;
    return {
      ...pad,
      isPlaying: pad.active,
    };
  });
};
