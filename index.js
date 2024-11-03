const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(__dirname + req.url);
    let url = req.url;
    if (url === "/") {
      url = "/index.html";
      fs.readFile(__dirname + url, (err, data) => {
        res.write(data);
        res.end();
      });
    } else if (url === "/about") {
      url = "/about.html";
      fs.readFile(__dirname + url, (err, data) => {
        res.write(data);
        res.end();
      });
    } else if (url === "/contact-me") {
      url = "/contact-me.html";
      fs.readFile(__dirname + url, (err, data) => {
        res.write(data);
        res.end();
      });
    } else {
      url = "/404.html";
      fs.readFile(__dirname + url, (err, data) => {
        res.write(data);
        res.end();
      });
    }
  })
  .listen(8080, () => {
    console.log("Server is running on port 8080");
  });
