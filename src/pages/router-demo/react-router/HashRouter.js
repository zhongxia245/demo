import React, { useState, useEffect } from "react";
import { RouterContext } from "./store";

export default ({ children }) => {
  const [url, setUrl] = useState(window.location.hash);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      console.log(window.location.hash);
      setUrl(window.location.hash);
    });
  }, []);

  const router = {
    history: {
      push: function(url) {
        window.location.href = `#${url}`;
        setUrl(url);
      },
      replace: function(url) {
        window.location.replace(`#${url}`);
        setUrl(url);
      },
      go: window.history.go,
      back: window.history.back,
      goForward: window.history.forward,
      length: window.history.length
    },
    url: url.replace("#", "")
  };

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};
