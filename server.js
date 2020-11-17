require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');


const corsOptions = {
    origin: ['http://jtv-auto-detail.surge.sh'], // Surge link goes here.
    // origin: ['http://localhost:3001'], // Surge link goes here.
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }
  app.all('*', function(req, res, next) {
      var origin = req.get('origin');
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
  })
  
app.options("*", cors())
app.use(cors(corsOptions))
app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if(token){
        token = token.substring(constants.BEARER_START_INDEX) //remove string Bearer from the token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            return res.status(constants.UNAUTHORIZED).send(`ERROR: ${err}`);
        }
        req.user = decodedUser;//set the decoded payload to req object as the user information(username, id)

        next();// for cotrol to go to the next line of code
    })
}

app.use('/auth', routes.auth);
app.use('/request', routes.request);
app.use('/contact', routes.contact);
app.use('/auth/verify', verifyToken, routes.auth);


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})