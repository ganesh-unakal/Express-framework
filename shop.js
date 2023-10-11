const express = require('express');

const router = express.Router();

router.get("/shop", (req, res, next) => {
    res.send("<h1>Hello Express </h1>");
  });

router.get('/',(req,res,next) => {
    console.log('in anothers middlewares');
    res.send('<h1>hello from express</h1>')
})


module.exports = router