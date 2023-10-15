const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

//add 404 error page: 
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>')
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
