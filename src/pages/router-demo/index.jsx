import React from 'react';
import { render } from 'react-dom';
import { BrowswerRouter, HashRouter, Route, Link } from './react-router';
import './index.css';

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>about</div>;
};

const App = () => {
  return (
    <div className="normal">
      <HashRouter>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    </div>
  );
};

render(<App />, document.getElementById('app'));
