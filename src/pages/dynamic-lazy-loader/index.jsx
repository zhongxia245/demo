import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './index.less';

const config = [
  { name: '组件 A', props: { name: 'zhongxia' }, componentName: 'A.js' },
  { name: '组件 B', props: { age: 18 }, componentName: 'D.js' },
  { name: '组件 C', props: { score: 99 }, componentName: 'C.js' },
];

function App() {
  return (
    <div className="normal">
      <h1>动态按需加载模块</h1>
      {config.map((item, index) => {
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
      })}
    </div>
  );
}

render(<App />, document.getElementById('root'));
