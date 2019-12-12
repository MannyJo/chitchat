import React from 'react';
import './Input.scss';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="typingForm">
            <section className="inputSection">
                <input 
                    type="text"
                    value={message} 
                    placeholder="Type a message"
                    onChange={event => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </section>
            <section className="buttonSection">
                <button onClick={event => sendMessage(event)}>Send</button>
            </section>
        </form>
    );
}

export default Input;