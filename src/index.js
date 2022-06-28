const path = require("path");
const express = require('express');
const morgan = require("morgan");
const {engine} = require("express-handlebars");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources/views")); 

console.log(__dirname)

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  console.log(req.query);
  res.render('news');
})

app.get("/search", (req, res) => {
  res.render("search")
})
// app.post("/news", (req, res) => {
//   console.log(req.query.author);
//   res.render("search")
// })





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})