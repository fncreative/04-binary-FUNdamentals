'use strict';

const parseBitmap = require('./lib/parse-bitmap');
const readWrite = require('./lib/read-write');

const handleTransform = (existingFile) => {
  readWrite.read(existingFile, (error, buffer) => {
    const parsedBitmap = parseBitmap.parse();
  });
};

handleTransform('/assets/house.bmp');
