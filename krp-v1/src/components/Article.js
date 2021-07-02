import React from "react";
import "./styles/Article.scss";


export default function Article() {
    return (
        <div className="article-main">
            <div className="article-maintitle">
                <div className="article-title-accent-square"></div>
                <h2 className="article-title-heading"> Articles </h2>
            </div>
            <div className="article-container">

                <div className="article-right">
                    <div className="article-div1">
                        <div className="article-number">01</div>
                        <h3 className="article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci.</h3>
                    </div>
                    <div className="article-div2">
                        <div className="article-number">02</div>
                        <h3 className="article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere?</h3>
                    </div>
                    <div className="article-div3">
                        <div className="article-number">03</div>
                        <h3 className="article-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas.</h3>
                    </div>
                    <div className="article-div4">
                        <div className="article-number">04</div>
                        <h3 className="article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rem.</h3>
                    </div>

                </div>
                <div className="article-image">
                    <div className="article-left">
                        <h5 className="title">Drift</h5>
                        <p className="news">Consectetur adipisicing elit. Nobis cumque ad nisi consequatur debitis. In enim ut obcaecati omnis. Animi.</p>
                        <h5 className="bottom">BBC NEWS | 23 May 2021 | Kaulson </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
