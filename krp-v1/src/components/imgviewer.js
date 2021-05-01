import React from "react";
import "./styles/imgviewer.scss";
const data = [
    {
        index: 1,
        imag: "https://source.unsplash.com/featured/?tyres",
    },
    {
        index: 2,
        imag: "https://source.unsplash.com/featured/?bike",
    },
    {
        index: 3,
        imag: "https://source.unsplash.com/featured/?motorcyle",
    },
    {
        index: 4,
        imag: "https://source.unsplash.com/featured/?girls",
    },
    {
        index: 5,
        imag: "https://source.unsplash.com/featured/?drifting",
    },
    {
        index: 6,
        imag: "https://source.unsplash.com/featured/?racing",
    },

]
function Images() {
    let toDisplay = []
    for (let i = 1; i <= 6; i++) {
        let item = data[i - 1];
        let Background = item.imag
        const media = (

            < div className={"idiv" + i} style={{ backgroundImage: `url(${Background})` }} ></div >
        )
        toDisplay.push(media);
    }
    console.log(toDisplay)
    return toDisplay;
}
const Imgviewer = () => {
    return (
        <div className="home1container">
            <div className="home1text">
                {/* <h2>KRP RACING</h2>
                <h2>Connecting Next Gen Tech</h2> */}

            </div>
            <div className="imagecontainer">
                <Images />

            </div>
        </div>

    )
}

export default Imgviewer;