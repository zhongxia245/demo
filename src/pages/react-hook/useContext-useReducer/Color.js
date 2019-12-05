import React, { createContext, useReducer } from 'react';

// 创建 context
export const colorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
  console.log(state, action);
  debugger;
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};

/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有组件都可以访问到 value
 */
export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue');
  console.log(color, dispatch);
  return (
    <colorContext.Provider value={{ color, dispatch }}>{props.children}</colorContext.Provider>
  );
};
