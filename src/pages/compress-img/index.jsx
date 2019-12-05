import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Button, Toast } from 'antd-mobile';
import ImageUtil from './imageUtil';
import './index.less';

function Demo() {
  const [data, setData] = useState({
    file: null,
    base64: '',
  });

  useEffect(() => {}, []);

  const action = {
    onChange(e) {
      let file = e.target.files[0];
      setData({ ...data, file: file });
    },
    onCompress() {
      if (data.file) {
        ImageUtil.compressFile(data.file, 0.5, newFile => {
          console.log(newFile, base64);
          setData({ file: newFile, base64: base64 });
        });
      } else {
        Toast.info('请先选择文件', 3, null, false);
      }
    },
  };

  return (
    <div>
      <input type="file" onChange={action.onChange} />
      <Button type="primary" onClick={action.onCompress}>
        压缩图片
      </Button>

      {data.file && (
        <>
          <div className="info">
            <p>文件大小：{parseFloat(data.file.size / 1024).toFixed(2)}K</p>
            <p>文件名称：{data.file.name}</p>
            <p>文件类型：{data.file.type}</p>
          </div>
          <img src={data.base64} alt="图片" />
        </>
      )}
    </div>
  );
}

render(<Demo />, document.getElementById('root'));
