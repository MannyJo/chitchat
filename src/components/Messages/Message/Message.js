import React from 'react';

const Message = ({ message }) => (
    <div>
        {message.user} : {message.text}
    </div>
)

export default Message;