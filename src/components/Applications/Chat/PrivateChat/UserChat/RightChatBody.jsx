import { useEffect, useRef, useState } from "react";
import { ImagePath } from "../../../../../Constant";
import { TypeMessageHere } from "../../../../../Constant";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Button, Form, Input } from "reactstrap";
import ChatDropMenu from "./ChatDropMenu";
import Image from "next/image";

const RightChatBody = ({ chat, currentUser, messages, messageInput, setMessageInput, handleSendMessage, type, handleKeyDown }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addEmoji = (emoji) => {
    const text = `${messageInput}${emoji}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };

  return (
    <div className="right-sidebar-Chats">
      <div className="msger">
        <div className="msger-chat">
          {messages.length > 0 ? (
            messages.map((message, id) => {
              let sender;
              if (type === "uppdragGivare") {
                sender = message.senderBemannasKonto;
              } else {
                sender = message.senderBemanningsKonto;
              }
              const isCurrentUser = sender?.id === currentUser.id;
              return (
                <div className={`msg ${isCurrentUser ? "right" : "left"}-msg`} key={id}>
                  {sender?.image ? (
                    <Image src={`${ImagePath}/${sender.image}`} className="rounded-circle img-30 h-auto" alt="user" width={30} height={30} />
                  ) : (
                    <div className="msg-img" />
                  )}
                  <div className="msg-bubble mx-2">
                    <div className="msg-info">
                      <div className="msg-info-name">{sender?.name}</div>
                      <div className="msg-info-time">{message.createdAt}</div>
                    </div>
                    <div className="msg-text">{message.content}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <Image width={50} height={50} className="w-100" src={`${ImagePath}/start-conversion.jpg`} alt="start conversion" />
          )}
          <div ref={messagesEndRef} />
        </div>
        <Form className="msger-inputarea py-0">
          <ChatDropMenu />
          <Input
            className="msger-input two uk-textarea shadow-none"
            type="text"
            placeholder={TypeMessageHere}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="open-emoji">
            {showEmojiPicker ? <Picker data={data} onEmojiSelect={(e) => addEmoji(e.native)} /> : null}
          </div>
          <div className="smiley-box">
            <div className="picker second-btn uk-button px-1" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
          </div>
          <Button color="primary" className="msger-send-btn" onClick={handleSendMessage}>
            <i className="fa fa-location-arrow" />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RightChatBody;