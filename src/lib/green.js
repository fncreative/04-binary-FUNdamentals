'use strict';

const greenColorChange = require('./parse-bitmap');

greenColorChange.invert() => {
  for(let i = 0; i < this.colorTable.length; i ++){
    let greenColor = i % 255;
    this.colorTable[i] =
  }
}