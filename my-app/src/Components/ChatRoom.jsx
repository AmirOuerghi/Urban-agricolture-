import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatRoom.css'; 

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = io('http://localhost:3001'); // Replace with your backend server URL

  useEffect(() => {
    // Fetch initial chat history from the server
    fetchChatHistory();

    // Subscribe to new chat messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      socket.off('message');
    };
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/chatroom'); // Replace with your backend server URL
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error('Failed to fetch chat history:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/chatroom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage }),
      });
      if (response.ok) {
        setNewMessage('');
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="ChatRoom"> {/* Add the class name to the outer div */}
      <h1>Chatroom</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;