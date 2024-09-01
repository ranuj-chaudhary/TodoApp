import { useEffect, useState } from "react";

export default function useLocalStorage( key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentTheme;
    try {
      currentTheme = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentTheme = defaultValue;
    }
    return currentTheme;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
