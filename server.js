const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const quizPath = path.join(__dirname, "quize.html");
const port = Number(process.env.PORT) || 3000;

http.createServer((request, response) => {
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;

  if (pathname !== "/" && pathname !== "/quize.html") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  fs.readFile(quizPath, (error, content) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Unable to load the quiz");
      return;
    }

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(content);
  });
}).listen(port, "0.0.0.0", () => {
  console.log(`Quiz server listening on port ${port}`);
});
