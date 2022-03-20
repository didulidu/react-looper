import { Pad } from "../model/Pad";
import { getPadsFromUrls, refreshPads } from "./helpers";

export type LooperStateType = {
  pads: Pad[];
};

export type ActionType =
  | {
      type: "playSingle";
      padId: string;
    }
  | { type: "stopSingle"; pad: Pad }
  | { type: "playAll" }
  | { type: "stopAll" }
  | { type: "startInterval" };

export const getDefaultLooperReducerState = (): LooperStateType => {
  const urls = require.context("../../public", false, /\.(mp3|mpga)$/).keys();
  return {
    pads: getPadsFromUrls(urls),
  };
};

export const looperReducer = (state: LooperStateType, action: ActionType) => {
  switch (action.type) {
    case "playSingle": {
      const updatedPads = state.pads.map((pad) => {
        if (pad.id === action.padId) {
          const updatePad = {
            ...pad,
            active: !pad.active,
            isPlaying: pad.isPlaying && pad.active ? false : pad.isPlaying,
          };
          return updatePad;
        }
        return { ...pad };
      });

      return { ...state, pads: updatedPads };
    }
    case "stopSingle": {
      return state;
    }
    case "playAll": {
      const updatedPads = state.pads.map((pad) => {
        pad.audio.currentTime = 0;
        const updatePad = {
          ...pad,
          active: true,
          isPlaying: true,
        };
        return updatePad;
      });

      return { ...state, pads: updatedPads };
    }
    case "stopAll": {
      const updatedPads = state.pads.map((pad) => {
        const updatePad = {
          ...pad,
          active: false,
          isPlaying: false,
        };
        return updatePad;
      });

      return { ...state, pads: updatedPads };
    }
    case "startInterval": {
      return { ...state, pads: refreshPads(state.pads) };
    }
  }
};
