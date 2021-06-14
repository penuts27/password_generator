// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_Password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defauleLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  res.render('index', { password: generatePassword(options), options: options })
})

// starts the express servers and listening for connections
app.listen(port, () => {
  console.log(`Express server is listening on https://localhost:${port}`)
})
