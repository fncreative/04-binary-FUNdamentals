'use strict';


parsedBitmap.invert = (object, path, callback) => {
  const startValue = object.COLOR_TABLE_OFFSET;
  const size = object.COLOR_TABLE_SIZE;

  for (let i = startValue; i < startValue + size; i++) {
    const transformValue = (255 - object.allData[i]).toString(16);
    object.allData.write(transformValue, i, 'hex');
  }
  callback(object.allData, path);
};
// handleTransform(`${__dirname}/assets/${process.argv[2]}`);

const newFilePath = ('../assets/house2.bmp');
console.log('parse bitmap', parseBitmap);
if (transformType === 'invert') {
  transform.invert(parsedBitmap, newFilePath, fileHandler.write);
}

