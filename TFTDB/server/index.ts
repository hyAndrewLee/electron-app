const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const DB = require('./models/TFTModel')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../build')));


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
 