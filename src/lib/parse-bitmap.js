'use strict';

const fileHandler = require('./read-write');

const parseBitmap = module.exports = {};
const transform = require('./transform');

parseBitmap.parse = (error, buffer, transformType) => {
  const parsedBitmap = {};
  parsedBitmap.FILE_SIZE_OFFSET = 2;
  parsedBitmap.HEIGHT_OFFSET = 22;
  parsedBitmap.COLOR_TABLE_OFFSET = 54;
  parsedBitmap.COLOR_TABLE_SIZE = 1024;
  parsedBitmap.PIXEL_OFFSET_BEG = 10;
  parsedBitmap.allData = buffer;

  // parsedBitmap.fileSizeInBytes = buffer.readInt32LE(parsedBitmap.FILE_SIZE_OFFSET);
  // parsedBitmap.height = buffer.readInt32LE(parsedBitmap.HEIGHT_OFFSET);
  // parsedBitmap.colorTable = buffer.slice(parsedBitmap.COLOR_TABLE_OFFSET,
  //   parsedBitmap.COLOR_TABLE_SIZE);
  // parsedBitmap.pixelTable = buffer.readInt32LE(parsedBitmap.PIXEL_OFFSET_BEG);

  const newFilePath = (`${__dirname}/assets/${process.argv[3]}`);

  if (transformType === 'invert') {
    transform.invert(parseBitmap, newFilePath, fileHandler.write());
  }
};
