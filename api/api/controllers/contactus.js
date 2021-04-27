const { contactus } = require('../../db/models');
const fs = require("fs");

exports.get_all_contactus = (req, res, next)=>{
    contactus.findAll().then((result)=>{
        result.forEach(element => {
            element.dataValues.createdAt=undefined;
            element.dataValues.updatedAt=undefined;
        });
        res.status(200).json({
            contactus:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });    
}

exports.create_contactus = (req, res, next)=>{
    const contactus_data = {
        email: req.body.email,
        message: req.body.message
    }
    if(req.body.name){ contactus_data['name'] = req.body.name; }

    contactus.create(contactus_data).then((result)=>{
        res.status(200).json({
            ret: result
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}

exports.delete_contactus = (req, res, next)=>{
    const id = req.params.contactusId;
    contactus.destroy({
        where: {id: id}
     }).then(rowDeleted => {
       if(rowDeleted === 1){
        res.status(200).json({
            status : 'Deleted successfully'
        })
        }
     }).catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
    })});
}