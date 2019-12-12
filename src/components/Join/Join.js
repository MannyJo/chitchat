import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.scss';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onClickSubmit = event => (!name || !room) ? event.preventDefault() : null;

    const handleChangeFor = propName => event => {
        switch (propName) {
            case 'name':
                setName(event.target.value);
                break;
            case 'room':
                setRoom(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div className="joinContainer">
            <h1 className="joinTitle">Chitchat</h1>
            <div className="joinInput">
                <input type="text" placeholder="Name" onChange={handleChangeFor('name')} />
            </div>
            <div className="joinInput">
                <input type="text" placeholder="Room" onChange={handleChangeFor('room')} />
            </div>
            <Link onClick={onClickSubmit} to={`/chat?name=${name}&room=${room}`}>
                <button className="joinButton" type="submit"><b>Join</b></button>
            </Link>
        </div>
    );
};

export default Join;