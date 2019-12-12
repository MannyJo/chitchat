import React, { useState, useEffect } from 'react';
import queryString from 'querystring';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import './Chat.scss';

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
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="chatContainer">
            <section className="titleDiv">
                <div className="chatTitle">{room}</div>
                <a href="/" className="closeChat">X</a>
            </section>
            <section className="messageDiv">
                <Messages messages={messages} name={name} />
            </section>
            <section className="inputDiv">
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </section>
        </div>
    );
}

export default Chat;