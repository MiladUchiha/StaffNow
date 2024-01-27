// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import ChatList from '@/components/ChatList';
import ChatWindow from '@/components/ChatWindow';

export default function Home() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Simulate fetching chat data
    const dummyChats = [
      { id: 1, name: 'Chat 1', messages: ['Hi there!', 'Hello'] },
      { id: 2, name: 'Chat 2', messages: ['Good morning', 'Good day'] }
    ];
    setChats(dummyChats);
  }, []);

  return (
    <div className="flex h-screen ">
      <div className="w-1/4 bg-white border-r">
        <ChatList chats={chats} onSelectChat={setSelectedChat} />
      </div>
      <div className="w-3/4 flex flex-col">
        {selectedChat ? (
          <ChatWindow currentChat={selectedChat} />
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <span>Select a chat</span>
          </div>
        )}
      </div>
    </div>
  );
}
