// Chat.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to your server

function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUsername] = useState('');
  <h2>Welcome, {username}!</h2>
  useEffect(() => {
    // const user = prompt('Enter your name:'); // Prompt for the user's name
    setUsername(username);
    // Listen for incoming messages and initialize with stored messages
    socket.on('init', (initMessages) => {
      setMessages(initMessages);
    });

    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  const handleSendMessage = () => {
    const newMessage = {
      sender: username,
      text: message
    };

    socket.emit('chat message', newMessage);
    setMessage('');
  };

  return (
    <div className='container bg-white shadow' >
        <div className="chatHeader">
        <strong>{user}</strong> 
        </div>
      <ul>
        {messages.map((msg, index) => (
        <div key={index} className={msg.sender === username ? 'sent' : 'received'}>
        <strong>{msg.sender}:</strong> {msg.text}
      </div >
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat;
