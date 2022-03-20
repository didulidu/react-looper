import { Pad } from "../model/Pad";

export const refreshPads = (pads: Pad[]) => {
  return pads.map((pad) => {
    pad.audio.currentTime = 0;
    return {
      ...pad,
      isPlaying: pad.active,
    };
  });
};
