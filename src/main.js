'use strict';

const transform = require('./lib/transform');
const parseBitmap = require('./lib/parse-bitmap');
const readWrite = require('./lib/read-write');

// const handleTransform = (existingFile) => {
//   readWrite.read(existingFile, parseBitmap.parse);
// };
//
// handleTransform(`${__dirname}/assets/${process.argv[2]}`);

readWrite.read(`${__dirname}/../assets/house.bmp}`, (error, buffer) => {
  const parsedBitmap = parseBitmap.parse(buffer);
  // select transformation
  transform.invert(parsedBitmap);
  // here your bitmap haps been transformed
  readWrite.write(parsedBitmap, () => {});
});
