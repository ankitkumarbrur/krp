const express = require('express');
const app = express();
const morgan = require('morgan');

const testimonialsRoute = require('./api/routes/testimonials')
const adminUserRoute = require('./api/routes/adminusers');
const articlesRoute = require('./api/routes/articles');
const contactusRoute = require('./api/routes/contactus');
const homecarouselRoute = require('./api/routes/homecarousel');
const newsletterRoute = require('./api/routes/newsletter');


//LOGGING REQUESTS TO THE CONSOLE
app.use(morgan('dev'));
//PARSING THE REQUEST DATA
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  

app.use('/uploads', express.static('uploads'));
app.use('/testimonials', testimonialsRoute);
app.use('/adminuser', adminUserRoute);
app.use('/articles', articlesRoute);
app.use('/contactus', contactusRoute);
app.use('/homecarousel', homecarouselRoute);
app.use('/newsletter', newsletterRoute);

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