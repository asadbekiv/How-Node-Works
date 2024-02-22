'use strict'

const fs = require('fs');
// const { Server } = require('http');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    // Solition one
    // fs.readFile('./test-file.txt',(err,data)=>{
    //     if(err) return err;
    //     res.end(data);
    // });

    // Solution two

    // const readble = fs.createReadStream('./test-file.txt')
    // readble.on('data',chunk =>{
    //     res.write(chunk);

    // })
    // readble.on('end',()=>{
    //     res.end()
    // })
    // readble.on('error',err=>{
    //     console.log(err);
    //     res.statusCode = 404;
    //     res.end('File not found !');

    // })
    // SOlution three
    const readble =  fs.createReadStream('test-file.txt');
    readble.pipe(res);
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Sever is running on Port 8000 !');
})