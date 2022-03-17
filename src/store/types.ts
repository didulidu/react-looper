import { Pad } from "../model/Pad";

export type LooperContextType = {
  pads: Pad[];
  playSingle: (padId: string) => void;
  playAll: () => void;
  stopAll: () => void;
};
