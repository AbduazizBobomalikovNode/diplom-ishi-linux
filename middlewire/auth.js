const jwt = require('jsonwebtoken');
const jwt_my_key = process.env.JWT_MY_KEY || "bu_dunyo_sinov_dunyo";

// let x = {
//     'user': ['get/user','get/device','get/role','get/all', 'add', 'uptade', 'delete'],
//     'role': ['get/role', 'get/all', 'add', 'uptade', 'delete'],
//     'task': ['get/task', 'get/user', 'get/device', 'get/all', 'add', 'uptade', 'delete'],
//     'device': ['get/device','get/all', 'add', 'uptade', 'delete'],
//     'history': ['get/history','get/device', 'get/all', 'add', 'uptade', 'delete']
// }
// let user = {
//     'task': ['get/task', 'get/user', 'get/device', 'get/all', 'add', 'uptade', 'delete']
// }



module.exports = async function (req, res, next) {
    const x_token = req.cookies['x-web-token'];
    if (!x_token) {
        console.log('cookies  ishlamadi');
    }
    console.log('cookies  ishladi:',x_token);
    return next();
    let path_req = req.originalUrl.split('/');
    if (path_req.length > 4 && path_req[3] == 'get') {
        path_req[3] = path_req[3] + "/" + path_req[4];
    }

    const token = req.header('x-web-token');
    try {

        const expiredAt = jwt.decode(token).exp;

        const now = Math.floor(Date.now() / 1000);

        if (expiredAt < now) {
            console.log('Token yaroqsiz');
            return res.status(401).json({ error: "autorizatsiya eskirgan!" })
        }
        const user = jwt.verify(token, jwt_my_key);
        // console.log(user);

        if (!(user.licence[path_req[2]] ? user.licence[path_req[2]].includes(path_req[3]) : false)) {
            return res.status(403).json({ error: "ush bu foydalanuvchi bu bo'limdan foydalana olmaydi." });
        }

        req.user = user;
        return next();
    } catch (err) {
        const { message } = err;
        if (message == "jwt must be provided") {
            return res.status(400).json({ error: "web token jonatilmagan!" })
        } else {
            console.log(err);
            return res.status(401).json({ error: "ushbu foydalanuvchi autorizatsiya qilmagan!" })
        }
    }
}