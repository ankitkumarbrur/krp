import React from 'react';
import Carousel from "react-material-ui-carousel"

import './styles/Product2.scss'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,

} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Spare Parts",
        Caption: "Spare Parts your friends!",
        contentPosition: "left",
        Items: [
            {
                Name: "Battery",
                Image: "https://source.unsplash.com/featured/?battery"
            },
            {
                Name: "Headlight",
                Image: "https://source.unsplash.com/featured/?headlight"
            }
        ]
    },
    {
        Name: "Clothing",
        Caption: "Say yes to KRP clothing!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Black jacket",
                Image: "https://source.unsplash.com/featured/?blackjacket"
            },
            {
                Name: "Leather boots",
                Image: "https://source.unsplash.com/featured/?boots"
            }
        ]
    },
    {
        Name: "Safety Equipments",
        Caption: "Safety first!",
        contentPosition: "right",
        Items: [
            {
                Name: "Helment",
                Image: "https://source.unsplash.com/featured/?helmet"
            },
            {
                Name: "Safety Gaurd",
                Image: "https://source.unsplash.com/featured/?safetygaurd"
            }
        ]
    }
]

function Product2() {


    return (
        <div style={{ margin: "50px auto", color: "#494949", width: "85%" }}>

            <Carousel
                className="Example"
                autoPlay={true}
                animation={"slide"}
                indicators={false}
                timeout={200}
                cycleNavigation={true}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={false}
                next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}

            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
        </div>
    )


}

export default Product2;