'use strict';

const fileHandler = require('./read-write');

const parseBitmap = module.exports = {};
// const transform = require('./transform');

parseBitmap.parse = (error, buffer, transformType) => {
  const parsedBitmap = {};
  parsedBitmap.FILE_SIZE_OFFSET = 2;
  parsedBitmap.HEIGHT_OFFSET = 22;
  parsedBitmap.COLOR_TABLE_OFFSET = 54;
  parsedBitmap.COLOR_TABLE_SIZE = 1024;
  parsedBitmap.PIXEL_OFFSET_BEG = 10;
  parsedBitmap.allData = buffer;

  return parsedBitmap;


  parsedBitmap.invert = (object, path, callback) => {
    const startValue = object.COLOR_TABLE_OFFSET;
    const size = object.COLOR_TABLE_SIZE;
    for (let i = startValue; i < startValue + size; i++) {
      const transformValue = (255 - object.allData[i]).toString(16);
      object.allData.write(transformValue, i, 'hex');
    }
    callback(object.allData, path);
  };

  // parsedBitmap.fileSizeInBytes = buffer.readInt32LE(parsedBitmap.FILE_SIZE_OFFSET);
  // parsedBitmap.height = buffer.readInt32LE(parsedBitmap.HEIGHT_OFFSET);
  // parsedBitmap.colorTable = buffer.slice(parsedBitmap.COLOR_TABLE_OFFSET,
  //   parsedBitmap.COLOR_TABLE_SIZE);
  // parsedBitmap.pixelTable = buffer.readInt32LE(parsedBitmap.PIXEL_OFFSET_BEG);
  const newFilePath = ('../assets/house2.bmp');
  console.log('parse bitmap', parseBitmap);

  if (transformType === 'invert') {
    transform.invert(parsedBitmap, newFilePath, fileHandler.write);
  }
};
