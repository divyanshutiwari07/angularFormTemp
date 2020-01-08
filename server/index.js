var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();
const cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
var nodemailer = require('nodemailer');

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'test',
    debug    :  false
});

function select_all_emp(req,res) {
       // connection will be acquired automatically
       pool.query("select * from angular_form",function(err,rows){
        if(err) {
            return res.json({'error': true, 'message': 'Error occurred'+err});
        }
                //connection will be released as well.
                res.json(rows);
       });
}

app.get("/all",function(req,res){-
  select_all_emp(req,res);
});


function addRow(data) {
  let insertQuery = 'INSERT INTO angular_form (email, pass) VALUES (? , ?)';
  let query = mysql.format(insertQuery,[ data.email, data.password]);
  pool.query(query,(err, response) => {
      if(err) {
          console.error(err);
          return;
      }
      // rows added
      console.log(response.insertId);
  });
}

app.post("/storeInfo",function(req,res){-
  addRow(req.body);
  console.log("=========== BOdy Payload =============");
  console.log(req.body);
});


function deleteRow(id, req, res) {
  let deleteQuery = "DELETE from angular_form where ?? = ? ";
  let query = mysql.format(deleteQuery, ['id', id]);
  // query = DELETE from `todo` where `user`='shahid';
  pool.query(query,(err, response) => {
      if(err) {
          console.error(err);
          return;
      } else {
        select_all_emp(req,res);
      }
      
      // rows deleted
      console.log(response.affectedRows);
  });
}

app.post("/deleteUser",function(req,res){-
  deleteRow(req.body.id, req, res);
  console.log("=========== BOdy Payload =============");
  console.log(req.body);
});

function updateData(id, req, res) {
  let updateQuery = "UPDATE angular_form SET ?? = ?  WHERE ?? = ?";
    let query = mysql.format(updateQuery,[,"notes",data.value,"user",data.user]);
    // query = UPDATE `todo` SET `notes`='Hello' WHERE `name`='shahid'
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows updated
        console.log(response.affectedRows);
    });
}

app.post("/updateUserData",function(req,res){-
  updateData(req.body.id, req, res);
  console.log("=========== BOdy Payload =============");
  console.log(req.body);
});


// send email
app.post("/sendEmail",function(req,res){-
  console.log(req.body);
  let user = req.body;
  sendMail(user, (err, info) => {
    if(err) {
      console.log( 'err', err);
      res.send({error: 'failed to send email'});
    } else {
      console.log('THE mail has been send ');
      res.send(info);
    }
  });
  console.log("=========== BOdy Payload =============");
  console.log(req.body);
});

async function sendMail(user, callback) {
  let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false, 
    requireTLS: true,
    auth: {
      user: 'sendemailservice131@gmail.com',
      pass: 'sendemail123'
    }
  });

  let mailOptions = {
    from: 'Disaster',
    to: user.email,
    // to: 'divyanshutiwari07@gmail.com',
    to: user.email,
    subject: user.subject,
    html: user.message
  };

  
  let info = await transporter.sendMail(mailOptions);
  callback(info);

}

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});

