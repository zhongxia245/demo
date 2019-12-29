import { Button, Modal } from 'antd-mobile';
export default () => {
  return (
    <div>
      <h1>AAAAA</h1>
      <Button
        onClick={() => {
          Modal.alert('你好', '这是一个弹窗');
        }}
      >
        Click Me!
      </Button>
    </div>
  );
};
