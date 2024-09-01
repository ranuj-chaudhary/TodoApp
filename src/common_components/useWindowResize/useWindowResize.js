import { useLayoutEffect, useState } from "react";

const useWindowResize = function () {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleWindowResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(
    function () {
      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);

      return function () {
        window.removeEventListener("resize", handleWindowResize);
      };
    },
    [windowSize.width, windowSize.height]
  );

  return windowSize;
};

export default useWindowResize;
