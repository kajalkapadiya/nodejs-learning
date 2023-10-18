const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get("/message", (req, res, next) => {
    fs.readFile('messages.txt', (err, data) => {
        if (err) {
            console.log(err)
            data = 'No chat Exists'
        }
        res.send(`${data} <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        method="POST">
        <input id="message" type="text" name="message" placeHolder="message"/>
        <input type="hidden" name="username" id="username" />
        <br />
        <button type="submit">send</button></form>`)
    })
});

router.post('/message', (req, res, next) => {
    const username = req.body.username;
    const message = req.body.message;

    fs.writeFile("messages.txt", `${username}: ${message}\n`, { flag: 'a' }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Message saved successfully.");
        }
    });

    res.redirect('/message');
});

module.exports = router;

