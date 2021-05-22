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
                <div className="article-image">
                    <div className="article-left">
                        <h2 className="title">Kaulson Racing</h2>
                        <p className="news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae saepe tempora natus numquam reiciendis porro itaque aperiam deleniti illum assumenda necessitatibus dolorum quia perferendis iusto ratione, ducimus atque vel libero perspiciatis similique. Aliquid omnis iure velit reiciendis enim obcaecati fuga totam. Fugiat impedit esse repellat nemo aspernatur error sunt tenetur voluptatibus temporibus culpa? Pariatur, architecto, vel consequatur officia nihil dignissimos autem quas dolore, magnam iste distinctio non quos cupiditate.</p>
                        <h4 className="bottom">BBC NEWS | 23 May 2021 | Kaulson |</h4>
                    </div>
                </div>
                <div className="article-right">
                    <div className="article-div1">
                        <div className="article-number">01</div>
                        <h3 className="article-title">Groundwater Resources</h3>
                    </div>
                    <div className="article-div2">
                        <div className="article-number">02</div>
                        <h3 className="article-title">New Launch</h3>
                    </div>
                    <div className="article-div3">
                        <div className="article-number">03</div>
                        <h3 className="article-title">Kaulson Racing</h3>
                    </div>
                    <div className="article-div4">
                        <div className="article-number">04</div>
                        <h3 className="article-title">Suzuki Motorcorp</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
