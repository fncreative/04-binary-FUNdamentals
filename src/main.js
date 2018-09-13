'use strict';

const parseBitmap = require('./lib/parse-bitmap');
const readWrite = require('./lib/read-write');

const handleTransform = (existingFile) => {
  readWrite.read(existingFile, parseBitmap.parse);
};

handleTransform(`${__dirname}/assets/${process.argv[2]}`);
