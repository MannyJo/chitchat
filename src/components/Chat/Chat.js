import React, { useState, useEffect } from 'react';
import queryString from 'querystring';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search.replace('?', ''));

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div>
            <div>MESSAGES</div>
            <Messages messages={messages} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    );
}

export default Chat;