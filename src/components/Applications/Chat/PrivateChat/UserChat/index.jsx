import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import RightChatHeader from "./RightChatHeader";
import RightChatBody from "./RightChatBody";
import { Card, Col } from "reactstrap";
import Pusher from 'pusher-js';

const UserChat = ({ chat, currentUser, type, pusherKey, pusherCluster }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
    });
    const channel = pusher.subscribe(`chat-${chat.id}`);

    channel.bind('new-message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      channel.unbind('new-message');
      pusher.unsubscribe(`chat-${chat.id}`);
    };
  }, [chat.id]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chat/getMessages?chatId=${chat.id}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [chat.id]);

  

  const handleSendMessage = async () => {
    if (messageInput.trim() !== '') {
      try {
        const response = await axios.post('/api/chat/messages', {
          chatId: chat.id,
          senderId: currentUser.id,
          content: messageInput,
          type: type,
        });
        setMessages([...messages, response.data]);
        setMessageInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Col xxl="9" xl="8" md="7" className="box-col-6">
      <Card className="right-sidebar-chat">
        <RightChatHeader chat={chat} currentUser={currentUser} type={type} />
        <RightChatBody
          messages={messages}
          type={type}
          currentUser={currentUser}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          handleSendMessage={handleSendMessage}
         
        />
      </Card>
    </Col>
  );
};

export default UserChat;