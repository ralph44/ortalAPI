const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/user');
const userRoutes1 = require('./api/routes/box');


app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use((req, res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Method', 'PUT', 'POST', 'PATCH', 'DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/user', userRoutes);
app.use('/box', userRoutes1);


app.use((req, res, next) =>{
    const error = new Error("Not found");
    error.status(404);
});

app.use((error, req, res, next) =>{
   res.status(error.status || 500);
   res.json({
       error: {
           message: error.message
       }
   })
});
module.exports = app;