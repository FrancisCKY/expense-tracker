const express = require('express')
const app = express()
const { engine } = require('express-handlebars')

const router = require('./routes')

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))
app.use(router)

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(3000)