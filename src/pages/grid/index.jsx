import './index.less';
import { render } from 'react-dom';

const App = function() {
  return (
    <div className="normal">
      <div>
        <div>1</div>
      </div>
      <div>
        <div>2</div>
      </div>
      <div>
        <div>3</div>
      </div>
      <div>
        <div>4</div>
      </div>
      <div>
        <div>5</div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
