const { articles } = require('../../db/models');
const fs = require("fs");

exports.get_all_articles = (req, res, next)=>{
    articles.findAll().then((result)=>{
        result.forEach(element => {
            element.dataValues.createdAt=undefined;
            element.dataValues.updatedAt=undefined;
        });
        res.status(200).json({
            articles:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });    
}

exports.get_one_article = (req, res, next)=>{
    const id = req.params.articleId;
    articles.findByPk(id).then((result)=>{
        res.status(200).json({
            testimonial:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });    
}

exports.create_article = (req, res, next)=>{
    const article_data= {
        headline: req.body.headline,
        sourceurl: req.body.sourceurl,
        imgurl: req.file.path
    }
    articles.create(article_data).then((result)=>{
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

exports.update_article = (req, res, next)=>{
    const id = req.params.articleId;
    articles.findByPk(id).then((result)=>{
        if(result){
            const article_data= {
                headline: req.body.headline,
                sourceurl: req.body.sourceurl,
                imgurl: req.file.path
            }
            if(req.file){
                const pathToFile = result.imgurl;
                article_data['imgurl'] = req.file.path;
                fs.unlink(pathToFile, err => {
                if (err) {
                    throw err
                }
                });
            }
            else{
                article_data['imgurl']= result.imgurl;
            }
            articles.update(article_data,{ where: { id: id } }).then(result => {
                if(result) {
                    msg = "Updated Successfully"
                }
                else {
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

exports.delete_article = (req, res, next)=>{
    const id = req.params.articleId;
    articles.findByPk(id).then((result)=>{
        const pathToFile = result.imgurl;
        fs.unlink(pathToFile, err => { if (err) { throw err } });

        articles.destroy({
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
    })});
}