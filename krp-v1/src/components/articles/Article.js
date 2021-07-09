import React, { useState } from "react";
import "./Article.scss";
import arts from "./articles_data";
import { Carousel } from 'react-responsive-carousel'

export default function Article() {

    React.useEffect(() => {
        const el = document.getElementsByClassName("thumbs")[0]
        var newEl = el.cloneNode(false);
        while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
        el.parentNode.replaceChild(newEl, el);
    })

    const re = () => {
        return (arts.map((item, index) => {
            return (
                <div className="article-div"
                    onClick={(e) => {
                        // alert("clicked")
                        window.open(item.src)
                    }}
                    onMouseEnter={(e) => {
                        var evt = new MouseEvent("click", {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        });
                        e.currentTarget.parentElement.dispatchEvent(evt)
                    }}>
                    <div className="article-number">0{index + 1}</div>
                    <h3 className="article-title">{item.headline}</h3>
                </div>)
        }))
    }

    return (
        <div className="article-main">
            <div className="article-maintitle">
                <div className="article-title-accent-square"></div>
                <h2 className="article-title-heading"> Articles </h2>
            </div>

            <Carousel
                autoPlay={true}
                renderThumbs={re}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
            >
                {arts.map((item, index) => {
                    return (
                        <div className="article-image">
                            <img src={item.imageurl} />
                            <div className="article-left">
                                <h5 className="title">{item.tag}</h5>
                                <p className="news">{item.headline}</p>
                                <h5 className="bottom">{item.provider} | {item.date} | {item.reporter} </h5>
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </div>
    )
}
