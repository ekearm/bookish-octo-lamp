'use strict';

const fs = require('fs');

/**
 * 
 * @param {the file it self} file
 * @desc It uses the FS module to read a file 
 */
function readFile(file){
  return new Promise((resolve, reject) => {

    fs.readFile(file,(error,data) => {

      if(error){
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * 
 * @param {contents of a file} data 
 * @desc It takes the contents of the file and turns it to upper case
 */

function toUpp(data){
  data = Buffer.from(data);
  return data.toString().toUpperCase();
}


/**
 * 
 * @param {*} file
 * @desc after the to uppercase function runs this writes the new data to the file 
 */
function writeFile(file, text){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, text, (error) => {
      if(error){
        reject(error);
      }else{
        resolve();
      }
    });
  });
}
module.exports = {readFile,toUpp,writeFile};