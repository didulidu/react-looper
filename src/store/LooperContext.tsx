import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { getAudioDuration } from "./helpers";

import { looperReducer, getDefaultLooperReducerState } from "./looperReducer";
import { LooperContextType, LooperProviderProps } from "./types";

export const LooperContext = createContext<LooperContextType>(
  {} as LooperContextType
);

export const useLooperContext = () => useContext(LooperContext);

export const LooperProvider: FC<LooperProviderProps> = ({ children }) => {
  const [intervalId, setIntervalId] = useState<null | NodeJS.Timer>(null);
  const [duration, setDuration] = useState<number>(0);
  useEffect(() => {
    async function getDuration() {
      const duration = await getAudioDuration();
      setDuration(duration);
    }
    getDuration();
  }, []);
  const [{ pads }, dispatch] = useReducer(
    looperReducer,
    getDefaultLooperReducerState()
  );

  const isLooperInactive = useMemo(
    () => pads.every((pad) => !pad.active),
    [pads]
  );

  const shouldStartInterval = useMemo(
    () => !isLooperInactive && !intervalId,
    [intervalId, isLooperInactive]
  );

  const resetInterval = useCallback(() => {
    if (!duration) return;

    const intervalId = setInterval(() => {
      dispatch({ type: "startInterval" });
    }, duration * 1000);
    setIntervalId(intervalId);
  }, [duration]);

  useEffect(() => {
    if (shouldStartInterval) {
      dispatch({ type: "startInterval" });
      resetInterval();
    }
  }, [dispatch, shouldStartInterval, resetInterval]);

  useEffect(() => {
    if (isLooperInactive) {
      clearInterval(intervalId!);
      setIntervalId(null);
    }
    return () => clearInterval(intervalId!);
  }, [intervalId, isLooperInactive]);

  const playSingle = useCallback(
    (padId: string) => {
      dispatch({ type: "playSingle", padId: padId });
    },
    [dispatch]
  );

  const playAll = useCallback(() => {
    clearInterval(intervalId!);
    resetInterval();
    dispatch({ type: "playAll" });
  }, [dispatch, intervalId, resetInterval]);

  const stopAll = useCallback(() => {
    dispatch({ type: "stopAll" });
  }, [dispatch]);

  return (
    <LooperContext.Provider value={{ pads, playSingle, playAll, stopAll }}>
      {children}
    </LooperContext.Provider>
  );
};
