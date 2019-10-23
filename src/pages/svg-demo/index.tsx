import './index.less';
import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="page">
      {/* svg 上设置的 fill stroke strokeWidth 会应用下里面的所有图形 */}
      <svg width="100vw" height="100vh">
        <g strokeWidth="1" stroke="#999" fill="none" transform="translate(100,0)">
          {/* 矩形 */}
          <rect x="20" y="20" rx="5" ry="5" width="100" height="100"></rect>
          {/* 圆形 */}
          <circle cx="200" cy="70" r="50"></circle>
          {/* 椭圆 */}
          <ellipse cx="350" cy="70" rx="70" ry="50"></ellipse>
          {/* 直线 */}
          <line x1="0" y1="150" x2="100" y2="250"></line>
          {/* 折线 */}
          <polyline points="250 150,250 250,200 150"></polyline>
          {/* 多边形，会把最后一个点和第一个点连起来 */}
          <polygon points="250 150,250 250,200 150" transform="translate(120,0)"></polygon>
        </g>
      </svg>
    </div>
  );
};

render(<App />, document.getElementById('root'));
