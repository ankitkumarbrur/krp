const { sequelize,testimonials } = require('../../models');

exports.get_testimonials = (req, res, next)=>{
    try{
        const testimon =  testimonials.create({name:"Ankit", post:"role", imgurl:"a", review:"a"}).then((message)=>{
            console.log(message);
        });
    }catch(err){
        console.log(err);
    }
    res.status(200).json({
        message: "GET request to testimonials successful"
    })
}
exports.create_testimonial = (req, res, next)=>{
    res.status(200).json({
        message: "Post request to testimonials successful"
    })
}
exports.update_testimonial = (req, res, next)=>{
    res.status(200).json({
        message: "Patch request to testimonials successful"
    })
}
exports.delete_testimonial = (req, res, next)=>{
    res.status(200).json({
        message: "Delete request to testimonials successful"
    })
}