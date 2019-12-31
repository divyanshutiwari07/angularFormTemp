var words = {
  'rainbow': 5
}
var database = [];
const express = require("express");

const app = express();
var bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const employee = require('./employee.json');

app.post('/testing', (req, res) => {
  console.log("=========== Serving testing data =============");
  console.log(req.body);
  if (req.body) {
    database.push(req.body);
    console.log(database);
  }
//   data = 'There is no matched record in the database'; 
//   res.contentType('text/html');
// res.send({'matched':data});
  res.json(employee);
});

app.get('/all', (req, res) => {
  res.json(database);
});

app.listen(2000, () => {
  console.log("Server is listening on port: 2000");
});
