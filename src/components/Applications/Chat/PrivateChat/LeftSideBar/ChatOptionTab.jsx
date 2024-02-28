
import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ChatTabPane } from "./ChatTabPane";
import { ContactTabPane } from "./ContactTabPane";

export const ChatOptionTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="advance-options">
      <Nav tabs className="border-tab flex justify-center" id="chat-options-tab">
        <NavItem><NavLink className="active w-auto" id="chats-tab">Chats</NavLink></NavItem>
      </Nav>
          <ChatTabPane/>
    </div>
  );
};
