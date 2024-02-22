const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
// process.env.UV_THREADPOOL_SIZE=4;

setTimeout(() => console.log('Timer 1 finished !'),0);
setImmediate(() =>console.log('Immedied one finsihed !'));


fs.readFile('test-file.txt', () =>{
    console.log('I/O finished 🏁');
    console.log('------------');


    setTimeout(() => console.log('Timer 1 finished !'),0);
    setTimeout(() => console.log('Timer 2 finished !'),3000);
    setImmediate(() =>console.log('Immedied one finsihed !'));
    process.nextTick(() => console.log('Proccess.nextTick'));

    crypto.pbkdf2Sync('pasword','salt',100000,1024,'sha512',()=>{

        console.log(Date.now() -start,'Pasword encrypted');
    });
    crypto.pbkdf2Sync('pasword','salt',100000,1024,'sha512',()=>{

        console.log(Date.now() -start,'Pasword encrypted');
    });
    crypto.pbkdf2Sync('pasword','salt',100000,1024,'sha512',()=>{

        console.log(Date.now() -start,'Pasword encrypted');
    });
    crypto.pbkdf2Sync('pasword','salt',100000,1024,'sha512',()=>{

        console.log(Date.now() -start,'Pasword encrypted');
    });
    crypto.pbkdf2Sync('pasword','salt',100000,1024,'sha512',()=>{

        console.log(Date.now() -start,'Pasword encrypted');
    });

})

console.log('Hello from the top level code 🧑‍💻');