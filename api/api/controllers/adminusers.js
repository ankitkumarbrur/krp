const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {adminusers} = require('../../db/models');

exports.adminuser_signup = (req, res, next) => {
  adminusers.findOne({where: { username: req.body.username }}).then(user => {
      if (user) {
        return res.status(409).json({
          message: "Username exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = {
              username:req.body.username,
              name:req.body.name,
              email:req.body.email,
              password:hash
            }
            adminusers.create(user).then((result)=>{
              console.log(result);
                res.status(201).json({
                  message: "User created"
                });
            }).catch((err)=>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            });
          }
        });
      }
    });
};

exports.adminuser_login = (req, res, next)=>{
  adminusers.findOne({where: { username: req.body.username }}).then(user => {
    if (user == null) {
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    // return res.status(200).json({
    //   message:user.password
    // });
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            username: user.username,
            userId: user.id
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token
        });
      }
      res.status(401).json({
        message: "Auth failed"
      });
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
}

exports.adminuser_delete = (req, res, next)=>{
    res.status(200).json({
        msg: "delete"
      });
}