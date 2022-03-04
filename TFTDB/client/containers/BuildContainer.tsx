import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BoardContainer from './BoardContainer';

const BuildContainer = () => {
  return (
    <div id="board">
      <div id="traits">
        test
      </div>
      <div id="comp">
         {BoardContainer}
      </div>
      <div id="items">
        test
      </div>
    </div>
  )
};

export default BuildContainer;