// ***************************** */
// const path = require('path');
// const normalizepath = path.normalize("/this/is//my///path");
// console.log(normalizepath)
// ***************************** */


// ***************************************** */
// const os = require("os");
// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.arch())
// ***************************************** */


// ///Buffer*******************************/
// const fs = require("fs");

// const data = fs.readFileSync("test.txt", 'utf-8');
// console.log(data);
// <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 42 75 66 66 65 72>

// const buf1 = new Buffer.alloc(10);
// // creates a buffer of 10 bytes

// const buf2 = Buffer.from([
//     10,
//     20,
//     30,
//     40,
//     50
// ]);
// // creates a buffer of 5 bytes
// const buf3 = new Buffer.alloc(5, 'hello', 'utf-8'); // creates a buffer of 5 bytes with the string 'hello'

// console.log(buf3)
// console.log(buf3.subarray(2, 4))

// const buf4 = new Buffer.alloc(5, 'hello', 'utf-8');
// const str = buf4.toString('utf-8', 0, buf4.length); // returns the string 'hello'
// console.log(str);


// const buf5 = Buffer.alloc(5, 'hello', 'utf-8');
// const buf6 = new Buffer.alloc(5);
// buf1.copy(buf6); // copies the data from buf1 to buf2
// console.log(buf6.toString('utf-8'));
// //******************************************************/


// /////URL******************************/
// const url = require('url');
// const urlString = 'https://www.example.com/path/to/page?param1=value1&param2=value2#section1';
// const parseURL = url.parse(urlString);
// console.log(parseURL.host);
// console.log(parseURL.protocol);
// console.log(parseURL.pathname);
// console.log(parseURL.query);
// console.log(parseURL.hash);

// const urlObject = {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.example.com',
//     port: null,
//     hostname: 'www.example.com',
//     hash: '#fragment',
//     search: '?query=value',
//     query: {
//         query: 'value'
//     },
//     pathname: '/path/to/file',
//     path: '/path/to/file?query=value',
//     href: 'https://www.example.com/path/to/file?query=value#fragment'
// };

// const urlString2 = url.format(urlObject);
// console.log(urlString2);

// const fromUrl = 'https://www.example.com/path/to/file';
// const toUrl = '../other/file';
// const resolvedUrl = url.resolve(fromUrl, toUrl);
// console.log(resolvedUrl);
// console.log("testing-again");
// /********************************* */
// // npm i --production


// /// require module type
// import chalk from 'chalk'

// console.log(chalk.red('Hello world!'));

// let arr = [
//     1,
//     2,
//     4,
//     5,
//     6,
//     7
// ];

// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }


// const sayHello = require('./mymodule.js').default
// sayHello();

const mymodule = require('mynodemodule');

const chosenColor = mymodule.getRandomColor();
console.log(`You should use ${
    chosenColor.name
} on your website. It's HTML code is ${
    chosenColor.code
}`);
