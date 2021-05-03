import React from 'react';
import {
    Paper,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button, Avatar, CardHeader, IconButton, CardActionArea,

} from '@material-ui/core';
import './styles/Product1.scss'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles';


const tileData = [
    {
        img: "https://source.unsplash.com/featured/?tyres",
        title: "Tyres",
        author: "Author",
    },
    {
        img: "https://source.unsplash.com/featured/?bike",
        title: "Bike",
        author: "Author",
    },
    {
        img: "https://source.unsplash.com/featured/?motorcycle",
        title: "Motorcycle",
        author: "Author",
    },
    {
        img: "https://source.unsplash.com/featured/?spareparts",
        title: "Spareparts",
        author: "Author",
    },
    {
        img: "https://source.unsplash.com/featured/?drift",
        title: "Drift",
        author: "Author",
    },

]
function Product() {
    var items = [];

    for (let i = 0; i < tileData.length; i++) {
        const item = tileData[i];
        const media = (
            <Grid item xs>
                <Card className="product1_card" >

                    <CardMedia className="product1_card"
                        component="img"
                        title={item.title}
                        image={item.img}
                        height={`100%`}

                    />

                    <div className="product1_text">
                        {item.title}
                    </div>


                </Card>
            </Grid >
        )
        items.push(media);

    }
    console.log(items)
    return items
}
function Product1() {

    return (
        <div className="product1image" >
            <div className="productcontainer">
                <h1 className="product1_heading">
                    SHOPPING
            </h1>
                <div className="gridcontainer" >

                    <Product />

                </div >
            </div >
        </div>
    )

}

export default Product1;