// components/ChatList.jsx
const ChatList = ({ chats, onSelectChat }) => {
    return (
      <div className="overflow-auto">
        {chats.map((chat) => (
          <div key={chat.id} onClick={() => onSelectChat(chat)} className="p-4 hover:bg-gray-100 cursor-pointer">
            {chat.name}
          </div>
        ))}
      </div>
    );
  };
  
  export default ChatList;
  