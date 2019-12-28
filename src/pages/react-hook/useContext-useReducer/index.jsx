import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './Color';

const App = () => {
  return (
    <div className="App">
      <Color>
        <Buttons />
        <ShowArea />
      </Color>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
