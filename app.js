const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/user');

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.use('/user', userRoutes);


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