const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('../database/fakedataDB.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/reviews', (req, res) => {
  console.log('the thing works')
  db.getData((err, data) => {
    if (err) {
      console.log('Error getting data from database')
    } else {
      res.send(JSON.stringify(data));
    }
  }) 
})

app.listen(8080, () => console.log('Review app listening on port 8080!'))
