import React from 'react';
import Message from './Message/Message';

const Messages = ({ messages }) => {
    return (
        <div>
            {messages.map((message, i) => <Message message={message} key={i} />)}
        </div>
    );
}

export default Messages;