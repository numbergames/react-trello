require('babel-polyfill');

const USE_SAMPLE_DATA = true;

const boardDataUrl =
  "https://www.mockaroo.com/e9f9ec20/download?count=1&key=e9e01840";

import React from 'react';
import ReactDOM  from 'react-dom';
import ItemContainer from './components/item-container';
import sampleData from './sampleData';

function render(data) {
  ReactDOM.render(
    <ItemContainer level={1}>
      {data}
    </ItemContainer>,
    document.getElementById('app')
  );
}

if (USE_SAMPLE_DATA) {

  render(sampleData);

} else {

  fetch(boardDataUrl)
  .then (res => res.json())
  .then (render)
  .catch(console.error);

}
