import React, { useContext } from "react";
import { RouterContext } from "./store";

export default function Link({ children, to }) {
  const { history } = useContext(RouterContext);

  return (
    <a
      href={to}
      onClick={e => {
        e.preventDefault();
        history.push(to);
      }}
    >
      {children}
    </a>
  );
}
