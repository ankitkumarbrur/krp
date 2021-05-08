import React, { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MdAccountCircle } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';


import { VscFeedback } from 'react-icons/vsc';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


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

                <Map className="feedbackmap" />
                <form className="feedbackForm">


                    <div className="formhead">Contact Us</div>
                    <InputLabel htmlFor="outlined-basic">Name</InputLabel>
                    <Input id="outlined-basic" label="Name" variant="outlined" className="forminputs"

                        startAdornment={
                            <InputAdornment position="start">
                                < MdAccountCircle className="icons" />
                            </InputAdornment>
                        }
                    />
                    <InputLabel htmlFor="outlined-basic">Email</InputLabel>
                    <Input id="outlined-basic" label="Email" variant="outlined" className="forminputs"

                        startAdornment={
                            <InputAdornment position="start">
                                < HiOutlineMail className="icons" />
                            </InputAdornment>
                        }
                    />
                    <InputLabel htmlFor="standard-multiline-flexible">Feedback</InputLabel>
                    <Input id="standard-multiline-flexible" label="Feedback" variant="outlined" className="forminputs"
                        rows={2}
                        rowsMax={4}
                        startAdornment={
                            <InputAdornment position="start">
                                < VscFeedback className="icons" />
                            </InputAdornment>
                        }
                    />





                    <button className="feedbackbutton" >Submit</button>




                </form>



            </div>
        </form >
    )
}
