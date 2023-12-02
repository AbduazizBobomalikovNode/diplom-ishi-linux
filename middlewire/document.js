const jwt = require('jsonwebtoken');
const jwt_my_key = process.env.JWT_MY_KEY || "bu_dunyo_sinov_dunyo";

module.exports = async (req, res, next) => {
    console.log(req.url);
    const token = req.cookies['x-web-token'];
    console.log(token);
    try {
        const user = jwt.verify(token, jwt_my_key);
        if(user){
            return next();
        }
        return res.render('public/pages/erors/not-active');
        // console.log(user);
    } catch (err) {
        console.log(err);
        return res.render('public/pages/erors/not-active');
    }
    return next();
}