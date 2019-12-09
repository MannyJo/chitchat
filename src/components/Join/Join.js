import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    return (
        <div>
            <h1>Join Page</h1>
            <Link to="/chat">
                <button type="submit">Sign In</button>
            </Link>
        </div>
    );
};

export default Join;