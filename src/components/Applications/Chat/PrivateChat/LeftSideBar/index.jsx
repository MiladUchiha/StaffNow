import React from "react";
import { Search } from "react-feather";
import { Card, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import { ImagePath } from "../../../../../Constant";
import SearchNotFoundClass from "../../../Contact/TabData/SearchNotFoundClass";
import { Badge } from "reactstrap";
import Image from "next/image";

export const LeftSideBar = ({ chats, selectedChatId, onSelectChat, currentUser, type }) => {
  const handleSearchKeyword = (keyword) => {
    // Implement your search logic here
  };

  return (
    <Col className="box-col-6">
      <Card className="left-sidebar-wrapper">
        <div className="left-sidebar-chat">
          <InputGroup>
            <InputGroupText>
              <Search className="search-icon text-gray" />
            </InputGroupText>
            <Input
              type="text"
              placeholder="Sök här.."
              defaultValue=""
              onChange={(e) => handleSearchKeyword(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="advance-options">
          <Nav tabs className="border-tab flex justify-center" id="chat-options-tab">
            <NavItem>
              <NavLink className="active w-auto" id="chats-tab">
                Chats
              </NavLink>
            </NavItem>
          </Nav>
          {chats.length > 0 ? (
            <ul className="chats-user">
              {chats.map((chat) => {
                let otherUser;
                if (type === "uppdragGivare") {
                  otherUser = chat.bemanningsKonto;
                } else {
                  otherUser = chat.bemannasKonto;
                }
                return (
                  <li
                    className={`common-space ${selectedChatId === chat.id ? "active" : ""}`}
                    key={chat.id}
                    onClick={() => onSelectChat(chat.id)}
                  >
                    <div className="chat-time">
                      <div className="active-profile">
                        <Image
                          width={40}
                          height={40}
                          className="img-fluid rounded-circle"
                          src={`${ImagePath}/${otherUser.image}`}
                          alt="user"
                        />
                        <div className={`status bg-${otherUser.online}`} />
                      </div>
                      <div>
                        <span>{otherUser.name}</span>
                        <p>{otherUser.status}</p>
                      </div>
                    </div>
                    <div>
                      <p>{chat.lastMessage}</p>
                      {chat.unreadCount > 0 && (
                        <Badge color="transparent" className="badge-light-success">
                          {chat.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <SearchNotFoundClass word="matchningar" />
          )}
        </div>
      </Card>
    </Col>
  );
};