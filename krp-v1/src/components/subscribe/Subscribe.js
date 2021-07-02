import React from 'react'
import './subscribe.scss';
import { HiOutlineMail } from 'react-icons/hi';
export default function Subscribe() {
    return (
        <div className="subscribeContainer">

            <input placeholder="E-mail" className="subscribeEmail">
            </input>
            <HiOutlineMail className="subscribeIcon" />

            <button className="subscribeBtn">Subscribe Now</button>
        </div>
    )
}
