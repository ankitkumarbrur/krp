const { sequelize,testimonials } = require('../../db/models');

exports.get_testimonials = (req, res, next)=>{
    testimonials.findAll().then((result)=>{
        res.status(200).json({
            testimonials:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });    
}
exports.create_testimonial = (req, res, next)=>{
    const testimonial_data= {
        name: req.body.name,
        post: req.body.post,
        imgurl: req.file.path,
        review: req.body.review
    }
    testimonials.create(testimonial_data).then((result)=>{
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
exports.update_testimonial = (req, res, next)=>{
    const id = req.body.id;
    testimonials.findByPk(id).then((result)=>{
        if(result){
            const testimonial_data= {
                name: req.body.name||result.name,
                post: req.body.post||result.post,
                review: req.body.review||result.review
            }
            if(req.file){
                testimonial_data['imgurl']= req.file.path;
            }
            else{
                testimonial_data['imgurl']= result.imgurl;
            }
            testimonials.update(testimonial_data,{ where: { id: id } }).then(result => {
                if(result)
                {
                    msg = "Updated Successfully"
                }
                else
                {
                    msg = "error occurred while updating"
                }                
                res.status(200).json({
                    status : msg
                })
            })
        }
        else
        {
            const error =  Error("Record Not found");
            next(error);
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}
exports.delete_testimonial = (req, res, next)=>{
    const id = req.body.id;
    testimonials.destroy({
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