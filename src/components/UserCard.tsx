import React from "react";

const UserCard = (props) => {
    return(
        <div className='ui centered raised card'>
            <div className='content'>
                <div className='descript'>
                    {props.children}
                </div>
            </div>
            <div className='ui bottom button' >
                <a href={props.external_url_spotify} target="_blank">
                    <div className="ui green animated button" >
                        <div className="visible content">Play Episode</div>
                        <div className="hidden content">
                            <i className="play icon"></i>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default UserCard;