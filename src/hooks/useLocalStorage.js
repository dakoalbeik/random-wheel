import { useState } from "react";

const useLocalStorage = (defaultVal = {}, key) => {
  const [state, _setState] = useState(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }

    return defaultVal;
  });

  const setState = (newState) => {
    localStorage.setItem(key, JSON.stringify(newState));
    _setState(newState);
  };

  return [state, setState];
};

export default useLocalStorage;
