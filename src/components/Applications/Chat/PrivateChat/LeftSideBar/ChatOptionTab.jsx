
import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ChatTabPane } from "./ChatTabPane";


export const ChatOptionTab = () => {


  return (
    <div className="advance-options">
      <Nav tabs className="border-tab flex justify-center" id="chat-options-tab">
        <NavItem><NavLink className="active w-auto" id="chats-tab">Chats</NavLink></NavItem>
      </Nav>
          <ChatTabPane/>
    </div>
  );
};
