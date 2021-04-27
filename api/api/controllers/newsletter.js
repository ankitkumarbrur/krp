const { newsletter } = require('../../db/models');

exports.get_all_newsletter = (req, res, next)=>{
    newsletter.findAll().then((result)=>{
        result.forEach(element => {
            element.dataValues.createdAt=undefined;
            element.dataValues.updatedAt=undefined;
        });
        res.status(200).json({
            newsletter:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });    
}

exports.create_newsletter = (req, res, next)=>{
    const newsletter_data= { email: req.body.email }
    newsletter.create(newsletter_data).then((result)=>{
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

exports.delete_newsletter = (req, res, next)=>{
    const id = req.params.newsletterId;
    newsletter.destroy({
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
}