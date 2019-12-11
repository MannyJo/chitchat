import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form>
            <div>
                <input 
                    type="text"
                    value={message} 
                    placeholder="Type a message"
                    onChange={event => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
            <button onClick={event => sendMessage(event)}>Send</button>
        </form>
    );
}

export default Input;