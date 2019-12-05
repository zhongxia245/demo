/**
 * 学习 useReducer 的使用方式
 * https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer
 */
import './index.less';

import React, { useReducer, useState } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd-mobile';

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
      break;
    case 'SUB':
      return { count: state.count - 1 };
      break;
  }
  return state;
}

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>{count}</h1>
      <div className="btns">
        <Button
          type="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </Button>
        <Button
          type="ghost"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </Button>
      </div>
      <hr />
      <h1>{state.count}</h1>
      <div className="btns">
        <Button
          type="primary"
          onClick={() => {
            dispatch({ type: 'ADD' });
          }}
        >
          +1
        </Button>
        <Button
          type="ghost"
          onClick={() => {
            dispatch({ type: 'SUB' });
          }}
        >
          -1
        </Button>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
