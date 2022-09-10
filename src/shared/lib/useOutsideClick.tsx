import React, { useEffect } from "react";

interface OutsideClickI {
  ref: React.RefObject<HTMLDivElement>,
  callback?: Function,
}

export default function useOutsideClick({ ref, callback = () => {} }: OutsideClickI) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}