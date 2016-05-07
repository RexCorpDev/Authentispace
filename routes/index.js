'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('cookies=>\n', req.cookies);

  // var indexPath = path.join(__dirname, '../views/index.html');
  // res.cookie("Toby's cookies", 'chocolateChip');
  res.sendFile(indexPath);
})

// function authMiddleWare(req, res, next) {
//   var token = req.cookies.accessToken;
//   if( validate(token) ) {
//     // good token
//     next();
//   } else {
//     // bad token
//     res.status(401).send('Not Authorized!');
//   }
// };


// router.get('/secret', authMiddleWare, function(req, res){
// });

module.exports = router;
