import React, { useState, useEffect } from 'react'
import { Grid, Card, TextField, CardMedia, makeStyles } from '@material-ui/core';

import ReactMapGL from 'react-map-gl';
import "./styles/Feedback.scss"
const initialValues = {
    name: '',
    email: '',
    message: '',
}



function Map() {
    const [viewport, setViewport] = React.useState({
        latitude: 28.630147507384166,
        longitude: 77.13611554603273,
        zoom: 14
    });

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiZGJoYWdlc2giLCJhIjoiY2tvMm1jMnBtMDljbTJwcnRseXpwMXozciJ9.7ksS7azZTG3zRnGmgdP7yA"
        />
    );
}



export default function Feedback() {

    const [values, setvalues] = useState(initialValues);
    return (
        <form>
            <div class="feedbackcontainer">
                <Map />
                <div className="feedbackForm">
                    <h2 className="cheadline">CONTACT US</h2>
                    <div className="feedbackcard">
                        <TextField id="standard-basic" label="Name" className="inputs" />
                        <TextField id="standard-basic" label="Email" className="inputs" />
                        <TextField id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            rows={2}
                            rowsMax={4}
                            className="inputs" />

                    </div>
                </div>



            </div>
        </form>
    )
}
