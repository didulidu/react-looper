import { ReactNode } from "react";
import { Pad } from "../model/Pad";

export type LooperContextType = {
  pads: Pad[];
  playSingle: (padId: string) => void;
  playAll: () => void;
  stopAll: () => void;
};

export type LooperProviderProps = {
  children: ReactNode;
  initialState?: { pads: Pad[] };
};
