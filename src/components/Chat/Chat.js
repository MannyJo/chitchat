import React, { useState, useEffect } from 'react';
import QueryString from 'querystring';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const ENDPOINT = 'http://localhost:5000';
    
    useEffect(() => {
        const { name, room } = QueryString.parse(location.search.replace('?', ''));
        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join', { name, room });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    return (
        <div>
            {
                messages.map((message, i) => <div key={i}>{message.name}</div>)
            }
        </div>
    );
}

export default Chat;