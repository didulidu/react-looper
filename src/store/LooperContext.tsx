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

import { looperReducer, getDefaultLooperReducerState } from "./looperReducer";
import { LooperContextType } from "./types";

export const LooperContext = createContext<LooperContextType>(
  {} as LooperContextType
);

export const useLooperContext = () => useContext(LooperContext);

export const LooperProvider: FC = ({ children }) => {
  const urls = require.context("../../public", false, /\.(mp3|mpga)$/).keys();
  console.log(urls);
  const [intervalId, setIntervalId] = useState<null | NodeJS.Timer>(null);

  const [{ pads }, dispatch] = useReducer(
    looperReducer,
    getDefaultLooperReducerState(urls)
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
    const intervalId = setInterval(() => {
      dispatch({ type: "startInterval" });
    }, 8.01955 * 1000);
    setIntervalId(intervalId);
  }, []);

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
