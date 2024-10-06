import { useEffect } from 'react';

export function useOutsideClick(ref, handler) {
  useEffect(
    function () {
      function outSideClick(e) {
        if (ref.current == null) return;
        if (ref.current && ref.current.contains(e.target)) return;

        handler();
      }

      document.addEventListener('click', outSideClick);
      document.addEventListener('ontouchstart', outSideClick);

      return function () {
        document.removeEventListener('click', outSideClick);
        document.removeEventListener('ontouchstart', outSideClick);
      };
    },
    [ref, handler]
  );
}
