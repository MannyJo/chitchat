import React from 'react';
import './Message.scss';

const Message = ({ message, name }) => {

    let isCurrentUser = false;
    let isAdmin = false;

    if(message.user.trim().toLowerCase() === name.trim().toLowerCase()) {
        isCurrentUser = true;
    }
    if(message.user.trim().toLowerCase() === 'admin') {
        isAdmin = true;
    }

    return (
        <>
            {
                isAdmin ?
                    <div className="noti">
                        {message.text}
                    </div> :
                    isCurrentUser ?
                        <div className="myChat">
                            <div className="name">{message.user}</div>
                            <div className="myText">{message.text}</div>
                        </div> :
                        <div className="otherChat">
                            <div className="name">{message.user}</div>
                            <div className="otherText">{message.text}</div>
                        </div>
            }
        </>
    );
}

export default Message;