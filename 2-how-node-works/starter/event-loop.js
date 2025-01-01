const fs = require('fs');
const crypto = require('crypto');

//////////////////////////////////////////////////////////////////////////
// The Event Loop in Practice
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log('Timer 1 Finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('---------------');

  setTimeout(() => console.log('Timer 2 Finished\n'), 0);
  setTimeout(() => console.log('Timer 3 Finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick'));

  //   Blocking
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(`${(Date.now() - start) / 1000} sec`, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(`${(Date.now() - start) / 1000} sec`, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(`${(Date.now() - start) / 1000} sec`, 'Password encrypted\n');

  //   Non-blocking
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${(Date.now() - start) / 1000} sec`, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${(Date.now() - start) / 1000} sec`, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${(Date.now() - start) / 1000} sec`, 'Password encrypted');
  });
});

console.log('Hello from the top level code');
console.log('------------------------------');
