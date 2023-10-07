const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  let responseText = "";

  if (url === "/home") {
    responseText = "Welcome home";
  } else if (url === "/about") {
    responseText = "Welcome to About Us page";
  } else if (url === "/node") {
    responseText = "Welcome to my Node.js project";
  } else {
    responseText = "Hello!";
  }

  res.setHeader("Content-Type", "text/plain");
  res.end(responseText);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
