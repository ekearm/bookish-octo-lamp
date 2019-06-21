'use strict';

require('dotenv').config();
const Q = require('@nmq/q/server');

Q.start();

const db = new Q('database');

db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');

const network = new Q('network');
network.monitorEvent('file-save');
network.monitorEvent('file-error');

/*
const io = require('socket.io')(3001);

io.on('connection', socket => {
  console.log(`Connected to socket: ${socket}`);
  socket.on('file-save', payload => {
    io.emit('file-save', payload);
  });
  
  socket.on('file-error', payload => {
    io.emit('file-error', payload);
  });
});*/