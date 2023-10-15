const express = require('express');
const router = express.Router();

//Path + method both check for get. not check for use.
router.get("/", (req, res, next) => {
    res.send("<h1>hello from express JS</h1>");
});

module.exports = router;