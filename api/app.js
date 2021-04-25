const express = require('express');
const app = express();
const morgan = require('morgan');

const testimonialsRoute = require('./api/routes/testimonials')


//LOGGING REQUESTS TO THE CONSOLE
app.use(morgan('dev'));
//PARSING THE REQUEST DATA
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/testimonials', testimonialsRoute);

//IF NO ROUTE IS MATCHED TO THE REQUEST SEND AN ERROR
app.use((req, res, next)=>{
    const error = new Error("Requested Route Not found!");
    error.status = 404;
    next(error);
});

//IN CASE ANY ERROR OCCURS (DATABASE CONNECTIVITY | UNMATCHED ROUTE)
app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message,
            status: error.status||500
        }
    })
})

module.exports = app;