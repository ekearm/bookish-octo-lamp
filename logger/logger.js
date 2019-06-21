'use strict';

//require('dotenv').config();
const Q = require('@nmq/q/client');
const db = new Q('database');

const dbEvents = ['create', 'read', 'delete', 'update'];
const file = new Q('file');

dbEvents.forEach(event => {
  db.subscribe(event, payload => {
    console.log(`${event}`, payload);
  });
});

file.subscribe('file-save', payload => {
  console.log('Ill tell you what', payload);
});

file.subscribe('file-error', () => {
  console.error('That boy aint right.');
});

console.log(db.subscriptions());
console.log(file.subscriptions());

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3001');

// /**
//  * @param {} payload
//  * @desc console logs the payload that has been saved 
//  */
// let saveLog = payload => {
//   console.log('Saved:', payload);
// };

// /**
//  * @desc console logs an error message
//  */
// let errorLog = () => {
//   console.error('That boy aint right');
// };

// socket.on('file-save', saveLog);
// socket.on('file-error', errorLog);

// module.exports = {saveLog, errorLog};