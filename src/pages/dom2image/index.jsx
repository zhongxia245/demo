import styles from './index.less';
import React from 'react';
import { render } from 'react-dom';
import dom2Image from 'dom-to-image';
import html2canvas from 'html2canvas';
import { Modal, Button, Toast } from 'antd-mobile';
import { LCGC } from 'lcgc-package/lib/utils';

/**
 * 已知问题
 * 1. 图片失真，因为手机分辨率是两倍的，截图的是一倍图
 * 2.
 */
const App = function() {
  let action = {
    downloadPng() {
      Toast.loading('正在截图...');
      setTimeout(() => {
        dom2Image.toSvg(document.getElementById('dom')).then(dataUrl => {
          Toast.hide();
          let a = document.createElement('a');
          a.setAttribute('download', 'demo.png');
          a.setAttribute('href', dataUrl);
          a.click();
        });
      }, 300);
    },
    save2Svg() {
      Toast.loading('正在截图...');
      setTimeout(() => {
        dom2Image.toSvg(document.getElementById('dom')).then(dataUrl => {
          Toast.hide();
          Modal.alert(<img style={{ width: '100%' }} src={dataUrl} />, null, [
            {
              text: '取消',
            },
            {
              text: '分享',
              onPress: () => {
                LCGC.openShare({
                  pic: dataUrl,
                });
              },
            },
          ]);
        });
      }, 300);
    },
    save2Png() {
      Toast.loading('正在截图...');
      setTimeout(() => {
        dom2Image.toPng(document.getElementById('dom')).then(dataUrl => {
          Toast.hide();
          Modal.alert(<img style={{ width: '100%' }} src={dataUrl} />, null, [
            {
              text: '取消',
            },
            {
              text: '分享',
              onPress: () => {
                LCGC.openShare({
                  pic: dataUrl,
                });
              },
            },
          ]);
        });
      }, 300);
    },
    canvasSave2Png() {
      Toast.loading('正在截图...');
      setTimeout(() => {
        html2canvas(document.getElementById('dom'), {
          useCORS: true, // 加上这个才能使用七牛上的图片地址，并且七牛需要设置好 CROS
          logging: false,
        }).then(canvas => {
          Toast.hide();
          const dataUrl = canvas.toDataURL();
          Modal.alert(<img style={{ width: '100%' }} src={dataUrl} />, null, [
            {
              text: '取消',
            },
            {
              text: '分享',
              onPress: () => {
                LCGC.openShare({
                  pic: dataUrl,
                });
              },
            },
          ]);
        });
      }, 300);
    },
  };

  return (
    <div className="normal" id="dom">
      <h2>本地图片</h2>
      <img src={require('./img/yay.jpg')} alt="yay" />
      <h2>七牛图片</h2>
      <img src="https://guihua-static.licaigc.com/2019-10-23-logo.png" alt="" />
      <ul className="list">
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
      </ul>
      <Button onClick={action.downloadPng}>dom2image下载图片</Button>
      <Button onClick={action.save2Svg}>dom2image保存SVG</Button>
      <Button onClick={action.save2Png}>dom2image保存PNG</Button>
      <Button onClick={action.canvasSave2Png}>html2canvas保存图片</Button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
