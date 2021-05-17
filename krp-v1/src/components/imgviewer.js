import React from "react";
import { Navbar } from './index';
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
    {
        index: 7,
        imag: "https://source.unsplash.com/featured/?model",
    },
    {
        index: 8,
        imag: "https://source.unsplash.com/featured/?business",
    },

]




//const originalTitle = document.getElementById('item1');

/* window.addEventListener("scroll", () => {
    const percentLabel = document.getElementsByID('item0');
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    percentLabel.style.opacity = '1';
    //document.title = `(${scrollPercentRounded}%) ${originalTitle}`;
});
 */


function Images() {
    let toDisplay = []
    for (let i = 1; i <= 8; i++) {
        let item = data[i - 1];
        let Background = item.imag
        const media = (

            < div className={"idiv" + i}   > <img src={Background} /></div >
        )
        toDisplay.push(media);
    }
    console.log(toDisplay)
    return toDisplay;
}
const Imgviewer = () => {
    return (
        <div className="home1container">
            <Navbar />
            <div id="item0" ></div>
            <div className="home1text">
                <h1>ONE Stop Shop For<br />
                    <div>Motorcycle</div> Performance Parts,<br />
                Accessories, Gear & Wear</h1>
                <button>About Us</button >
            </div>
            <div id="item1" className="imagecontainer">
                <Images />

            </div>
        </div>

    )
}

export default Imgviewer;