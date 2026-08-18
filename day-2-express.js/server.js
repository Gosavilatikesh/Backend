// let http = require("http");

// let server = http.createServer((req, res) => {
//   if(req.url === "/users"){
//     res.end("user me hu")
//   }

//   if(req.url === "/home"){
//     res.end("home me hu")
//   }

//   if(req.url === "/carts"){
//     res.end("carts me hu")
//   }
// });

// server.listen(3000, () => {
//   console.log("running");
// });

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("got it")
})

app.listen(3000, () => {
  console.log("server is running");
});
