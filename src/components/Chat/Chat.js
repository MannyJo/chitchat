import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [ name, setName ] = useState('');
    

    useEffect(() => {
        const user = {
            name: 'Manny',
            room: 'abcd'
        };

        socket = io('http://localhost:5000');

    });

    return (
        <div>Chat Page</div>
    );
}

export default Chat;