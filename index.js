// const messages = require('./messages.js');
// messages.SayHello();


// const http = require("http");

// // const serverCallBackFunction = (req, res) => {
// //     console.log(req);
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end("Hello From Node app");
// // }

// // const server = http.createServer(serverCallBackFunction);
// // server.listen(3000, () => {
// //     console.log("Server is listening on port 3000");
// // })


// const options = {
//     hostname: "www.google.com",
//     port: 80,
//     path: "/",
//     method: "Get"
// };

// const req = http.request(options, res => {
//     console.log("StatusCode " + res.statusCode);

//     res.on("data", data => {
//         process.stdout.write(data);
//     })

//     res.on("error", error => {
//         console.error(error);
//     });
// })
// req.end();


const fs = require("fs");

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     if (err)
//         throw err;


//     console.log(data);
// })

// const fileContent = "Text coming from Node app";
// fs.writeFile("sample.txt", fileContent, (err) => {
//     if (err)
//         throw err;


//     console.log("File created");
// });

// fs.mkdir("sample", (err) => {
//     if (err)
//         throw err;


//     console.log("Directory created");
// })

// / sync

const data = fs.readFileSync("test.txt", 'utf-8');
console.log(data);
