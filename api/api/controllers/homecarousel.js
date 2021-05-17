const { homecarousel } = require('../../db/models');
const fs = require("fs");

exports.get_all_homecarousel = (req, res, next)=>{
    homecarousel.findAll().then((result)=>{
        result.forEach(element => {
            element.dataValues.createdAt=undefined;
            element.dataValues.updatedAt=undefined;
        });
        res.status(200).json({
            homecarousel:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });    
}

exports.create_homecarousel = (req, res, next)=>{
    const homecarousel_data= { imgurl: req.file.path }
    homecarousel.create(homecarousel_data).then((result)=>{
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

exports.delete_homecarousel = (req, res, next)=>{
    const id = req.params.homecarouselId;
    homecarousel.findByPk(id).then((result)=>{
        const pathToFile = result.imgurl;
        
        fs.unlink(pathToFile, err => { if (err) { throw err } });

        homecarousel.destroy({
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
        });
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
    })})
}