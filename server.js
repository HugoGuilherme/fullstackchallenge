const express = require('express')
const app = require('./index');
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({ extended: true })
)
app.use(express.json())

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});