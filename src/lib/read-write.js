'use strict';

const fs = require('fs');
const parseBitmap = require('./parse-bitmap');

const fileHandler = module.exports = {};

fileHandler.read = (filePath, callback) => {
  return fs.readFile(filePath, (error, buffer) => {
    if (error) {
      throw new Error('something bad happened, the file was not read');
    }
    const parsedBitmap = parseBitmap.parse(buffer);
    callback(fileHandler.write(parsedBitmap));
  });
};

fileHandler.write = (newFilePath, buffer, callback) => {
  return fs.writeFile(newFilePath, buffer, (error) => {
    if (error) {
      throw new Error('something else bad happened, I could not write the file');
    }
    return callback();
  });
};

// fileHandler.read(`${__dirname}/../assets/house.bmp`, (error, buffer) => {
//   if (error) {
//     throw new Error('sometihng happened');
//   }
//   const parsedBitmap =
//   console.log(buffer);
//   return buffer;
// });
