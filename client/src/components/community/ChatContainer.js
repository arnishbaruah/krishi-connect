import React, { useState, useEffect } from 'react';


import io from 'socket.io-client';

const socket = io('https://krushi-connect-backend.onrender.com/'); // Connect to your server
export default function ChatContainer({ username }) {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUsername] = useState('');
    const [time, setTime] = useState('');

    <h2>Welcome, {username}!</h2>
    useEffect(() => {
      // const user = prompt('Enter your name:'); // Prompt for the user's name
      setUsername(username);
      setTime(new Date().toLocaleString('en-US') );
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
        text: message,
        timestamp: time
      };
  
      socket.emit('chat message', newMessage);
      setMessage('');
    };


    const getCurrentDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
      };
    
      const renderMessageDate = (timestamp) => {
        const messageDate = new Date(timestamp).toLocaleDateString('en-US');
    
        if (messageDate === getCurrentDate()) {
          return 'Today';
        } else {
          return messageDate;
        }
      };
  return (
   
    <>
      <div class="chat__section mt-5">
        <div class="brand">
            <img height="" style={{height:"50x", width:"50px"}} src="/wassup.png" alt=""/>
            <h1>Community Support</h1>
        </div>
        <div class="message__area">
        <div className="current-date text-center mb-3">{getCurrentDate()}</div>
        {messages.map((msg, index) => ( 
           <>
           <h4 className={msg.sender === username ? 'incomingname' : 'outgoingname'}>{msg.sender} </h4>
       <div className={msg.sender === username ? 'incoming message' : 'outgoing message'}>

       <span>
       {msg.text} <br />
       <small className='' style={{"fontSize":"11px"}}>{msg.timestamp.split(',')[1]}</small>
       </span>
      
       </div> 
           </> 
        ))}
        </div>
        <div className='d-flex justify-content-center alings-item-center mb-2 p-2'>
            <input id="textarea" className='textarea'   placeholder="Write a message..."   type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}></input>
          <button className='btn btn-success px-5' onClick={handleSendMessage}>Send</button>
        </div >
    </div>
    </>
  )
}
