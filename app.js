const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const adminroutes = require('./Routes/admin')
const shoproutes = require('./Routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminroutes)
app.use(shoproutes)

app.use((req,res,next) => {
      res.status(404).send('<h1>Page not found</h1>')   
})


app.listen(3000);
