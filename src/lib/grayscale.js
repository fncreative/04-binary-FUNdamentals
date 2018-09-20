'use strict';

const grayColorChange = require('.parse-bitmap');

grayColorChange.invert(object,path,)=> {

  for( var i = 0; i <this.colorTable.length; i ++){
    let sameColor = (this.colorTable[i] + this.colorTable[i + 1] + this.colorTable[i + 2])/3

    this.colorTable[i] = sameColor;
    this.colorTable[i] = sameColor;
    this.colorTable[i] = sameColor;

  }
}