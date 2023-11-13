const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000; // yoki istalgan boshqa port

const taskRouter = require("./routers/task");
const roleRouter = require("./routers/role");
const userRouter = require("./routers/user");
const RHTRouter = require("./routers/role_has_task");
const certificateRouter = require("./routers/certificate");
const fileRouter = require("./routers/file");
const authRouter = require("./routers/auth");


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/task',taskRouter)
app.use('/role',roleRouter)
app.use('/user',userRouter)
app.use('/RHT',RHTRouter)
app.use('/certifcate',certificateRouter)
app.use('/file',fileRouter)
app.use('/login',authRouter)
// Pug templateni sozlash
app.set('view engine', 'pug');
app.set('views', './views'); // Pug fayllarini joylash

// Static fayllarni servis qilish (masalan: css, js)
app.use(express.static('views/public'));
app.use('/documents',express.static('views/certifcate'));

app.get('/', (req, res) => {
  res.render('public/index'); // 'login.pug' faylini ishlatish
});
// Login sahifasi uchun GET tarmoq so'rovini qo'llash
app.get('/login', (req, res) => {
  res.render('public/pages/login'); // 'login.pug' faylini ishlatish
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} portda ishlayapti...`);
});
