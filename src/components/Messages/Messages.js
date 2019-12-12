import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.scss'

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <Message message={message} name={name} key={i} />)}
        </ScrollToBottom>
    );
}

export default Messages;