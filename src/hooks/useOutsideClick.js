import { useEffect, useRef } from "react";

function useOutSideClcik(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Clicking Outside");
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler]
  );
  return ref;
}

export default useOutSideClcik;
