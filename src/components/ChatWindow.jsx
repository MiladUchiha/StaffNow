// components/ChatWindow.jsx
"use client"
import { useState } from 'react';

const ChatWindow = ({ currentChat }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(currentChat.messages || []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 bg-gray-200 my-2 rounded">
            {msg}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input 
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
      </div>
    </div>
  );
};

export default ChatWindow;

