'use strict';

const transform = module.exports = {};

transform.invert = (object, path, callback) => {
  const startValue = object.COLOR_TABLE_OFFSET;
  const size = object.COLOR_TABLE_SIZE;


  for (let i = 0; i < size.length; i++) {
    object.size[i] = 255 - object.size[i];
  }
  callback(object.allData, path);
};
