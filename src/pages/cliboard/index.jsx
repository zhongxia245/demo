import './fastclick';
import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { render } from 'react-dom';
import './index.less';

class App extends Component {
  componentDidMount() {
    const Clipboard = require('clipboard');
    const clipboard = new Clipboard('#copy');
    clipboard.on('success', () => {
      Toast.show('复制成功，微信搜索关注基金豆');
    });
    clipboard.on('error', () => {
      Toast.show('当前机型不支持快捷复制');
    });
  }

  render() {
    return (
      <div>
        <p>测试复制功能，目前看IOS12.2之前可以，之后不可以</p>
        <div className="btn" id="copy" data-clipboard-text="jijinvip">
          复制
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
