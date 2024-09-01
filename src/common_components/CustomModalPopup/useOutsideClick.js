import { useEffect } from "react";

export const useOutsideClick = (ref, handler) => {
  useEffect(
    function () {
      function EventListerner(event) {
        console.log(ref.current);
        if (ref.current == null || ref.current.contains(event.target)) return;

        handler();
      }

      // ADD EVENT LISTENERS
      document.addEventListener("click", EventListerner);
      document.addEventListener("onTouchStart ", EventListerner);

      return function () {
        // REMOVE EVENT LISTENERS
        document.removeEventListener("click", EventListerner);
        document.removeEventListener("onTouchStart", EventListerner);
      };
    },
    [ref, handler]
  );
};
