'use strict';

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');

// const testBuffer = Buffer.from('The Hound');
//------------------------------------------------------------------------------------------------
// //! Vinicio - this would print a hex representation of the buffer
// console.log(testBuffer);
// console.log(testBuffer.toString());
//------------------------------------------------------------------------------------------------
// //! Vinicio  if you access a buffer using the array operator [], you'll get a BASE 10 value
// //! DECIMAL(84) === HEXADECIMAL(54)
// console.log(testBuffer[0]);
//------------------------------------------------------------------------------------------------
// console.log(testBuffer.readUInt8(4));
// //! Vinicio - we know that WE ARE LITTLE ENDIAN
// //! VInicio - we know that 16 bits equal to 2 bytes
// console.log(testBuffer.readUInt16LE(0));
// //! Vinicio - we that 32 bits equal 4 bytes = 8 nibbles
// //! Vinicio - in the calculator (hex), we type: 20 65 68 54
// console.log(testBuffer.readUInt32LE(0));
//------------------------------------------------------------------------------------------------
// // Writing 8 bits
//------------------------------------------------------------------------------------------------
// testBuffer.writeUInt8(70, 0);
// console.log(testBuffer.toString());
// testBuffer[0] = 65;
// console.log(testBuffer.toString());
// testBuffer.write('Gregor   ');
// console.log(testBuffer.toString());
// console.log(testBuffer);

// fs.readFile(`${__dirname}/assets/litany.txt`, (error, buffer) => {
//   if (error) {
//     throw error;
//   }
//   // console.log(buffer);
//   // console.log(buffer.toString());
//   // // buffer[0] = 50;
//   // // buffer[1] = 100;
//   // buffer.writeInt16LE(123, 0);
//   // console.log(buffer.toString());
//
//   //! Vinicio - spoiler alert, this is not working code
//   // for (let i = 0; i < buffer.length / 3; i + = 3) {
//   //   //! Vinicio - THIS IS WHERE YOU CHANGE COLORS
//   //   //! Red Green Blue
//   //   buffer[i] = i % 255; //! Vinicio - Red
//   //   buffer[i + 1] = i % 255; //! Vinicio - Green
//   //   buffer[i + 2] = i % 255; //! Vinicio  - Blue
//   //   buffer[i] = 255; //! Vinicio - Red
//   //   buffer[i + 1] = 0; //! Vinicio - Green
//   //   buffer[i + 2] = 0; //! Vinicio  - Blue
//   // }
//   // console.log(buffer.toString());
// });


fs.readFile(`${__dirname}/assets/house.bmp`, (error, buffer) => {
  if (error) {
    throw error;
  }
  const parsedBitmap = parseBitmap.parse(buffer);
  filReader.write();
});













