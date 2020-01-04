import React, { lazy, Suspense, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './index.less';

const DEFAULT_CONFIG = [
  { name: '组件 A', props: { name: 'zhongxia' }, componentName: 'A.js' },
  { name: '组件 B', props: { age: 18 }, componentName: 'D.js' },
  { name: '组件 C', props: { score: 99 }, componentName: 'C.js' },
];

function App() {
  const [config, setConfig] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setConfig(DEFAULT_CONFIG);
    }, 2000);
  }, []);

  return (
    <div className="normal">
      <h1>动态按需加载模块</h1>
      {config.length > 0
        ? config.map((item, index) => {
            let Comp = lazy(() =>
              import(`./component/${item.componentName}`).catch(err => {
                return {
                  default: () => <div>{String(err)}</div>,
                };
              }),
            );

            return (
              <div className="module" key={index}>
                {item.name}
                <Suspense fallback={<div>组件加载中...</div>} key={index}>
                  <Comp />
                </Suspense>
              </div>
            );
          })
        : '数据加载中...'}
    </div>
  );
}

render(<App />, document.getElementById('root'));
