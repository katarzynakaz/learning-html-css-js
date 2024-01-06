/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
        "message": "Enter your URL",
        "name": "url"
    }])
  .then((answers) => {
    const url = answers.URL;





  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 

















//   var qr_svg = qr.image('I love QR!', { type: 'svg' });
//   qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
   
//   var svg_string = qr.imageSync('I love QR!', { type: 'svg' });





//   const fs = require('fs-extra')

// // Async with promises:
// fs.copy('/tmp/myfile', '/tmp/mynewfile')
//   .then(() => console.log('success!'))
//   .catch(err => console.error(err))

// // Async with callbacks:
// fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
//   if (err) return console.error(err)
//   console.log('success!')
// })

// // Sync:
// try {
//   fs.copySync('/tmp/myfile', '/tmp/mynewfile')
//   console.log('success!')
// } catch (err) {
//   console.error(err)
// }

// // Async/Await:
// async function copyFiles () {
//   try {
//     await fs.copy('/tmp/myfile', '/tmp/mynewfile')
//     console.log('success!')
//   } catch (err) {
//     console.error(err)
//   }
// }

// copyFiles()