import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from './Bingo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bingo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
