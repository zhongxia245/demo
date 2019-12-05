import React, { useContext } from 'react';
import { colorContext } from './Color';

const ShowArea = props => {
  const { color } = useContext(colorContext);
  return <div style={{ color: color }}>字体颜色展示为{color}</div>;
};

export default ShowArea;
