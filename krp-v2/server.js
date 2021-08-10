const express = require('express');
const app = express();
var proxy = require('express-http-proxy');

app.use('/proxy', (req, res, next) => {
  // const requestedUrl = `${req.protocol}://${req.get('Host')}${req.url}`
  const requestedUrl = 'https://www.google.com/'
  const modifiedURL = modifyURL(requestedUrl)
  proxy(modifiedURL)(req, res, next)
})

// app.get('/proxy', (req, res, next) => {
//   const modifiedURL = modifyURL(req.query.url)
//   return proxy(modifiedURL)(req, res, next)
// })
app.listen(3000, (err) => {
  if (err) throw err
  console.log(`> Ready on http://lvh.me:${3000}`)
})
// // var subdomain = require('express-subdomain');
// // var express = require('express');
// // const request = require('request');
// // var app = express();

// // var router = express.Router(); //main api router
// // var v1Routes = express.Router();
// // var v2Routes = express.Router();
 
// // v1Routes.get('/', function(req, res) {
// //   request.get('/shopping', function(err, response, body) {
// //     if (!err) {
// //       req.send(body);
// //     }
// //   }); 
// //     // res.send(res.redirect('http://localhost:3000/shopping'));
// // });

// // v2Routes.get('/', function(req, res) {
// //     request.get('/admin', function(err, response, body) {
// //       if (!err) {
// //         req.send(body);
// //       }
// //     });
// //     // res.redirect('http://localhost:3000/admin');
// // });

// // // var checkUser = function(req, res, next) {
// // //     if(!req.session.user.valid) {
// // //         return res.send('Permission denied.');
// // //     }
// // //     next();
// // // };
 
// // //the api middleware flow
// // router.use(subdomain('*.v1', v1Routes));
// // router.use(subdomain('*.v2', v2Routes));
 
// // //basic routing..
// // router.get('/', function(req, res) {
// //     res.send('Welcome to the API!');
// // });
 
// // //attach the api
// // // app.use(subdomain('api', router));
// // app.use(router);
// // // app.listen(3000);

// // app.listen(2021, (err) => {
// //     if (err) throw err
// //     console.log(`> Ready on http://lvh.xyz:${2021}`)
// // })


// const request = require('request')
// const express = require('express')
// // const next = require('next')
// const vhost = require('vhost')
// const http = require('http')
// const proxy = require('express-http-proxy');

// const port = process.env.PORT || 80
// // const dev = process.env.NODE_ENV !== 'production'
// // const app = next({ dev })
// const app = express();
// // const handle = app.getRequestHandler()

// // app.prepare().then(() => {
//   const Server = express()
//   const mainServer = express()
//   const adminServer = express()
//   const shoppingServer = express()

//   shoppingServer.get('/*', (req, res) => {

//     request.get(`http://lvh.me:3000/shopping${req.path.length == 1? '': req.path }`, function(err, response, body) {
//       if (!err) {
//         res.write(body);
//     }
//     }).on('end', function(err, response, body) {
//       if (!err) {
//         res.send('')
//     }});

//     // request.get(`http://lvh.me:3000/shopping${req.path.length == 1? '': req.path }`, function(err, response, body) {
//     //   if (!err) {
//     //     res.write(response);
//     //   }
//     // }); 
//     // return app.render(req, res, `/shopping${req.path.length == 1? '': req.path }`, req.query)
//   })
//   mainServer.get('/*', (req, res) => {

//   // console.log(`${req.path.length == 1? '':'/' }${req.path}`)
//     request.get(`http://lvh.me:3000${req.path.length == 1? '': req.path }`, function(err, response, body) {
//       if (!err) {
//           res.write(body);
//       }
//     }).on('end', function(err, response, body) {
//       if (!err) {
//         res.send('')
//     }});
  
//   // request.get(`http://lvh.me:3000${req.path.length == 1? '':'/' }${req.path}`, function(err, response, body) {
//   //   if (!err) {
//   //     res.send(body);
//   //   }
//   // });

//     // return app.render(req, res, `${req.path.length == 1? '':'/' }${req.path}`, req.query)
//   })

//   adminServer.get('/*', (req, res) => {

//     request.get(`http://lvh.me:3000${req.path.length == 1? '': req.path }`, function(err, response, body) {
//       if (!err) {
//         res.write(body);
//     }
//     }).on('end', function(err, response, body) {
//       if (!err) {
//         res.send('');
//     }});

//     // request.get(`http://lvh.me:3000/admin${req.path.length == 1? '': req.path }`, function(err, response, body) {
//     //   if (!err) {
//     //     res.send(body);
//     //   }
//     // }); 
//     // return app.render(req, res, `/admin${req.path.length == 1? '': req.path }`, req.query)
//   })



//   // Server.use(vhost('admin.lvh.me', adminServer))
//   // Server.use(vhost('shopping.lvh.me', shoppingServer))
//   // Server.use(vhost('lvh.me', mainServer))
//   const rp = require('request-promise-native');
//   const options = {
//       uri: 'http://lvh.me:3000/shopping',
//       headers: {
//           'User-Agent': 'Request-Promise'
//       },
//       json: true // Automatically parses the JSON string in the response
//   };

//   app.get('/shopping', (req, res) => {
//       rp(options)
//       .then(parsedBody => {
//           res.send(parsedBody);
//       })
//       .catch(err => {
//           res.send(err);
//       });
//   });

//   Server.listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://lvh.me:${port}`)
//   })
// // })
