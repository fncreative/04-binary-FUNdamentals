'use strict';

const fs = require('fs');

const trans = require('./transform');

const fileHandler = module.exports = {};

fileHandler.read = (filePath, callback, transformType) => {
  fs.readFile(`${__dirname}/../assets/house.bmp`, (error, buffer) => {
    console.log(filePath);
    if (error) {
      return callback(error);
    }
    return callback(null, buffer);
  });
};

fileHandler.write = (buffer, newFilePath, callback) => {
    console.log('new file path', newFilePath);
  fs.writeFile(`${__dirname}/../assets/house.bmp`, (error) => {
    if (error) {
      throw new Error('something else bad happened, I could not write the file');
    }
    return callback();
  });
};
