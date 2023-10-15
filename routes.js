const fs = require("fs");

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node Js Response</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="myMessage"><button type=submit>Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("myMsg.txt", message, (err) => {
        //success
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Js Response</title></head>");
  res.write("<body><h1>Hello from Node Js!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
    handleRequest: reqHandler,
  };