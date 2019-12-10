import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>Join Page</h1>
            <div>
                <input type="text" placeholder="Name" onChange={handleChangeFor('name')} />
            </div>
            <div>
                <input type="text" placeholder="Room" onChange={handleChangeFor('room')} />
            </div>
            <Link onClick={onClickSubmit} to="/chat">
                <button type="submit">Sign In</button>
            </Link>
        </div>
    );
};

export default Join;