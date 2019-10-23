import './index.less';
import React from 'react';
import { render } from 'react-dom';
import CSV from './csv.js';
import marked from 'marked';

const Table = ({ data = [], columns = [] }: any) => {
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {columns.map((item: any, i: Number) => {
            return <td key={String(i)}>{item.title}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, i: Number) => {
          return (
            <tr key={String(i)}>
              {columns.map((column: any, j: Number) => {
                return <td key={String(j)}>{item[column.key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App = () => {
  const columns = [
    { title: 'id', key: 'id' },
    { title: '姓名', key: 'name' },
    { title: '年龄', key: 'age' },
  ];
  const data = [
    { id: 1, name: 'zhongxia', age: 18 },
    { id: 2, name: 'zhongxia2', age: 18 },
    { id: 3, name: 'zhongxia3', age: 18 },
    { id: 4, name: 'zhongxia4', age: 18 },
  ];
  return (
    <div className="page">
      <Table columns={columns} data={data} />
      <button
        onClick={() => {
          let csv = new CSV('test', data, columns);
          csv.download();
        }}
      >
        下载CSV
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(`
          // 如何使用代码
          let csv = new CSV('test', data, columns);
          csv.download();
          `),
        }}
      ></div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
