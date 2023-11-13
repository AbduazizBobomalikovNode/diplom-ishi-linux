const express = require('express');
const bcrypt = require('bcrypt');
const Auth = express.Router();
const jwt = require('jsonwebtoken');

const jwt_my_key = process.env.JWT_MY_KEY || "bu_dunyo_sinov_dunyo";
var db = require('../db/mongodb');

setInterval(async () => { db = await db }, 100);

Auth.post('/', async (req, res) => {
    const auth = req.body;
    console.log("body : ", auth);

    if (auth.hasOwnProperty('login') && auth.hasOwnProperty('password')) {
        let user = await (await db).user.getUserForObj({ phone: auth.login });
        if (!user) {
            user = await (await db).user.getUserForObj({ email: auth.login });
        }
        console.log(user)
        if (user.length < 1) {
            return res.status(400).json({ error: "parol yoki login  xato!." });
        }
        const role = await (await db).role.getRole(user[0].idrole);
        if (!role) {
            return res.status(400).json({ error: "o'chirilgan hisob!." });
        }
        // user[0].licence = JSON.parse(`${role.licence}`.replaceAll("'", '"'));;
        // console.log(user)
        user[0].role = role.name;
        let pas_flag = await bcrypt.compare(auth.password, user[0].password);
        console.log('pas',pas_flag)
        if (user[0] && pas_flag) {
            const token = jwt.sign({ ...user[0] }, jwt_my_key);
            if (user[0]) {
                return res
                    .cookie("x-web-token", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                    })
                    .status(200)
                    .send(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <script>
                            setTimeout(()=>{window.location.href = '/';},1000);
                        </script>
                    </head>
                    <body>
                        <h1>info: 'hisobga kirish mufaqiyatli.</h1>
                    </body>
                    </html>`);
            }
        } else {
            return res.status(400).json({ error: "parol yoki login  xato!." });
        }
    } else {
        return res.status(400).json({ error: "malumotlar  xato!." });
    }
});

module.exports = Auth;
