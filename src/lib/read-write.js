'use strict';

const fs = require('fs');

const fileHandler = module.exports = {};

fileHandler.read = (filePath, callback) => {
  return fs.readFile(filePath, (error, buffer) => {
    if (error) {
      throw new Error('something bad happened, the file was not read');
    }
    return callback(null, buffer);
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
