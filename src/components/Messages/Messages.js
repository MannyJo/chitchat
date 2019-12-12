import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.scss'

const Messages = ({ messages }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <Message message={message} key={i} />)}
        </ScrollToBottom>
    );
}

export default Messages;