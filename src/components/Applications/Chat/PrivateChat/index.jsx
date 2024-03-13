"use client"
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "@/components/Applications/Chat/PrivateChat/LeftSideBar";
import UserChat from "@/components/Applications/Chat/PrivateChat/UserChat";
import axios from "axios";

const PrivateChatContainer = ({currentUser, type, pusherKey, pusherCluster}) => {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('/api/chat/chats', {
          params: { userId: currentUser.id },
        });
        setChats(response.data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };
  
    fetchChats();
  }, [currentUser.id]);

 
  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
   
    <Container fluid   >
      <Row className="g-0">
       
      <LeftSideBar
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={handleSelectChat}
          currentUser={currentUser}
          type={type}
        />
        {selectedChat && (
          <UserChat chat={selectedChat} pusherCluster pusherKey currentUser={currentUser} type={type} />
        )}
      </Row>
    </Container>
    
  );
};

export default PrivateChatContainer;