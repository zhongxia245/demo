import React, { useContext } from "react";
import { RouterContext } from "./store";

export default function Route({ component, path }) {
  const { history, url } = useContext(RouterContext);
  const match = {
    path,
    url
  };
  const Component = component;
  return url === path && <Component history={history} match={match} />;
}
