import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import styles from './index.less';

let timer: any = null;

const App = function() {
  let PERIMETER = Math.ceil(Math.PI * 2 * 50);

  let [data, setData] = useState({ countDown: 3, current: 0 });

  useEffect(() => {
    setData({ ...data, current: PERIMETER });
    timer = setInterval(() => {
      // 必须使用函数的方式，否则data 会一直是最刚开始的值,闭包的原因
      setData(newData => {
        return { ...newData, countDown: newData.countDown - 1 };
      });
    }, 1000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  if (data.countDown > 0) {
    return (
      <div className={styles.normal}>
        <div className="loading">
          <svg width="120" height="120">
            <circle cx="60" cy="60" r="50" strokeWidth="1" stroke="#EBEBEB" fill="none"></circle>
            <circle
              cx="60"
              cy="60"
              r="50"
              strokeWidth="3"
              stroke="#81C784"
              fill="none"
              transform="matrix(0,-1,1,0,0,120)"
              strokeDasharray={`${data.current} ${PERIMETER}`}
            ></circle>
          </svg>
          <div className="loading__text">
            <strong>
              {data.countDown}
              <span>s</span>
            </strong>
            <p>请稍等</p>
          </div>
          <p>充值结果查询中…</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>查询成功</p>
      </div>
    );
  }
};

render(<App />, document.getElementById('root'));
