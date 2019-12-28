import React, { useState, useEffect } from "react";
import { RouterContext } from "./store";

export default ({ children }) => {
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setUrl(window.location.pathname);
    });
  }, []);

  const router = {
    history: {
      push: function(url, state, title) {
        window.history.pushState(state, title, url);
        setUrl(url);
      },
      replace: function(url, state, title) {
        window.history.replaceState(state, title, url);
        setUrl(url);
      },
      go: window.history.go,
      back: window.history.back,
      goForward: window.history.forward,
      length: window.history.length
    },
    url: url
  };

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};
