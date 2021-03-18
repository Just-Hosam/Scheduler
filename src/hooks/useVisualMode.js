import { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) history.pop();
    setMode(newMode);
    history.push(newMode);
  };

  const back = () => {
    if (mode === initial) return;
    history.pop();
    setMode(history.slice(-1)[0]);
  };
  
  return {
    mode,
    transition,
    back
  };
};