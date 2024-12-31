const fs = require('fs');
const http = require('http');

///////////////////////////////////////////////////////////////////////////////////////
// Files

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
// Callback Hell...
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.error(`ERROR! ${err}`);
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         if (err) return console.error(err);
//         console.log('Your file has been written!');
//       });
//     });
//   });
// });
// console.log('Will read file!');

//////////////////////////////////////////////////////////////////////////////////////
// Server
const server = http.createServer((req, res) => {
  res.end('Hello from the server!');
});

server.listen(8000, 'localhost', function () {
  console.log('Listening to requests on http://localhost:8000/');
});
