const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const app = express();
const exhbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const compression = require("compression");

// config file
require("dotenv").config();

// importing middlewares

// req parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(compression());

// view engine setup
const hbs = exhbs.create({
  defaultLayout: "main",
  extname: "hbs",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
  helpers: {
    uploadPath: "/uploads/",
  },
});

//  static
app.use(express.static(path.join(__dirname, "public")));

//  mongodb
require("./helper/db")();

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySession",
  expires: 1000 * 60 * 30, // 10 min
});
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store,
  })
);

// engine
app.engine("hbs", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// translate

// importing routes
const clientRouter = require("./routes/client/index");
const adminRouter = require("./routes/admin/index");

//middleware
const auth = require("./middleware/admin/auth");
const nav = require("./middleware/nav");
const contact = require("./middleware/contact");
const coworking = require("./middleware/coworking");
const lang = require("./middleware/langueage");

// routing
app.use("/", lang, nav, contact, coworking, clientRouter);

// auth
app.use("/admin/login", require("./routes/admin/login"));
app.use("/admin/register", require("./routes/admin/register"));
app.get("/admin/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw new Error(err);
  });
  res.redirect("/");
});

// admin
app.use("/admin", auth, adminRouter);

// 404 error
app.use(require("./middleware/404"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listen port ${port}`);
});

// MONGO_URI="mongodb+srv://webuser:webuser@cluster0.hbvbkdg.mongodb.net/changeit"
// SECRET_KEY="deepcode.uz"
