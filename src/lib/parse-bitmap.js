'use strict';

const fileHandler = require('./read-write');

const parseBitmap = module.exports = {};
// const transform = require('./transform');

class parseBitmap {
  constructor(buffer, object) {
    this.FILE_SIZE_OFFSET = 2;
    this.HEIGHT_OFFSET = 22;
    this.COLOR_TABLE_OFFSET = 54;
    this.COLOR_TABLE_SIZE = 1024;
    this.PIXEL_OFFSET_BEG = 10;
    this.allData = buffer;
    this.object = object;
  }

  get photoData() {
    return this.picData;
  }

  picData() {
    this.object.type = this.buffer.toString('utf-8', 0, 2);
    this.object.fileSizeInBytes = this.buffer.readInt32LE(this.FILE_SIZE_OFFSET);
    this.object.height = this.buffer.readInt32LE(this.HEIGHT_OFFSET);
    this.object.colorTable = this.buffer.slice(this.COLOR_TABLE_OFFSET);
    return this.object;
  }
}
