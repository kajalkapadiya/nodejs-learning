const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-users", (req, res, next) => {
  // console.log("In the middleware-3");
  res.send('<form action="/users" method="POST"><input type="text" name="title"/><button type="submit">Send</button></form>'
  );
});

app.post('/users', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

app.use("/", (req, res, next) => {
  // console.log("In the middleware-1");
  res.send("<h1>hello from express JS</h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);

});
