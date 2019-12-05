import React, { useContext } from 'react';
import { colorContext, UPDATE_COLOR } from './Color';

const Buttons = props => {
  const { dispatch } = useContext(colorContext);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: 'red' });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: 'yellow' });
        }}
      >
        黄色
      </button>
    </React.Fragment>
  );
};

export default Buttons;
