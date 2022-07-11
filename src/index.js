const path = require("path");
const express = require('express');
const morgan = require("morgan");
const {engine} = require("express-handlebars");
const app = express();
const port = 8080;
const route = require("./routes/indexroute");

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

const db = require("./config/db/index")


//Connect to DB
db.connect();
// var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
// app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(express.urlencoded({ extended: true }));

// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

// http logger
// app.use(morgan('combined'))

// template engine
app.engine('hbs', engine({ 
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources/views")); 

// console.log(__dirname)

route(app)

// app.get('/', (req, res) => {
//   res.render('home');
// })

// app.get('/news', (req, res) => {
//   console.log(req.query);
//   res.render('news');
// })

// app.get("/search", (req, res) => {
//   res.render("search")
// })
// app.post("/news", (req, res) => {
//   console.log(req.query.author);
//   res.render("search")s
// })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})