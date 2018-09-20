'use strict';

const parseBitmap = require('./lib/parse-bitmap');
const readWrite = require('./lib/read-write');
const grayColor = require('./lib/grayscale');
const pic = ['/assests/house.bmp'];


// const handleTransform = (existingFile) => {
//   readWrite.read(existingFile, parseBitmap.parse);
// };

for(var i = 0; i < pic.length; i ++) {
  readWrite(pic[i], (error, data)=> {
    if (error) {
      throw error;
      data.invert();

  readWrite(pic[i], (error,data) => {
    if (error) {
      throw error;
      data.grayScale();
    }
  }
}