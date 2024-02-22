'use strict'

const EventEmitter = require('events');
const http =require('http');


class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales();


myEmitter.on('newSale',()=>{
    console.log('There waas a new sale 💆');
});

myEmitter.on('newSale',()=>{
    console.log('Customer name : Jonas 🕴️');
});

myEmitter.on('newSale',stock=>{
    console.log(`There are left ${stock} items in stock  `);
})

myEmitter.emit('newSale',9);

///////////////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Request recived !')


})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is running on port 8000 !');
})

