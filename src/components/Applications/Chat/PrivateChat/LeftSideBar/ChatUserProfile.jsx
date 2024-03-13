import { ImagePath } from "../../../../../Constant";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/Hooks";
import { changeChat, createNewChatAsync } from "../../../../../Redux/Reducers/ChatSlice";
import { Badge } from "reactstrap";
import SearchNotFoundClass from "../../../Contact/TabData/SearchNotFoundClass";
import Image from "next/image";
const ChatUserProfile = () => {
  const { members, selectedUser, currentUser, chats } = useAppSelector((state) => state.chat);
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  const dispatch = useAppDispatch();
  const changeChatClick = (selectUser) => {
    const currentUserId = currentUser?.id;
    const currentChat = chats.find((x) => currentUser?.id !== undefined && x.users.includes(currentUser?.id) && x.users.includes(selectUser));
    if (currentChat) {
      dispatch(changeChat(selectUser));
    } else {
      dispatch(createNewChatAsync({ currentUserId, selectUser, chats }));
    }
  };
  return (
    <>
      {members && members.length > 0 ? (
        <ul className="chats-user ">
          {members
            .filter((x) => x.id !== currentUser?.id)
            .map((item, id) => (
              <li className={`common-space ${activeChat === item.id ? "active" : ""}`} key={id} onClick={() => changeChatClick(item.id)}>
                <div className="chat-time">
                  <div className="active-profile">
                    <Image className="img-fluid rounded-circle" src={`${ImagePath}/${item.image}`} alt="user" />
                    <div className={`status bg-${item.online}`} />
                  </div>
                  <div>
                    <span>{item.name}</span>
                    <p>{item.status}</p>
                  </div>
                </div>
                <div>
                  <p>{item.time} </p>
                  {item.badge && (<Badge color="transparent" className="badge-light-success">15</Badge>)}
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <SearchNotFoundClass word="matchningar" />
      )}
    </>
  );
};

export default ChatUserProfile;
