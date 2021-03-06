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

export const getPadsFromUrls = (urls: string[]) =>
  urls.map((url) => {
    const audio = new Audio(url);
    return {
      id: url,
      active: false,
      audio,
      isPlaying: !audio.paused,
    };
  });

export const getAudioDuration = async (): Promise<number> => {
  return new Promise((resolve, _) => {
    const audio = new Audio("./loop1.mp3");
    audio.onloadedmetadata = function () {
      resolve(audio.duration);
    };
  });
};
