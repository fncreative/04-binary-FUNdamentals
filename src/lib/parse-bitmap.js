'use strict';

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = aoeuaoeua; // :(
  //--------------------------------------------------------------------------
  // READING INFORMATION FROM THE BINARY DATA
  //--------------------------------------------------------------------------
  //! Vinicio - 1 byte = 1 position in toString
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSizeInBytes = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET,COLOR_TABLE_SIZE);
};