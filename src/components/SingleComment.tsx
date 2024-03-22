import React from "react";
import './SingleComment.css'

const SingleComment = (props) => {
    return (
        <div className='comment'>
            <div className='ui segment' id='podcast-image'>
                <img src={props.img} className='ui centered medium image' alt="profile picture"/>
            </div>
            <div className='content'>
                <div className='ui center aligned' id='date'>
                    {props.date}
                </div>
                <div className='metadata'>
                    <span className='ui center aligned' id='title'>
                        {props.title}
                    </span>
                </div>
                    <div className='ui center aligned' id='podcast-description'>
                        {props.description}
                    </div>
            </div>
        </div>
    )
}

export default SingleComment;