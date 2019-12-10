import React, { useState, useEffect } from 'react';
import QueryString from 'querystring';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({ location }) => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const ENDPOINT = 'http://localhost:5000';
    
    useEffect(() => {
        const { name, room } = QueryString.parse(location.search.replace('?', ''));
        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, error => {
            if(error) alert(error);
        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([ ...messages, message ]);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div>
            <div>MESSAGES</div>
            <div>
                <input 
                    value={message} 
                    onChange={event => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
        </div>
    );
}

export default Chat;