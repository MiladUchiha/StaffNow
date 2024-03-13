import { ImagePath } from "../../../../../Constant";
import Image from "next/image";
import ContactEdit from "./ContactEdit";

const RightChatHeader = ({ chat, currentUser, type }) => {
  let otherUser;
                if (type === "uppdragGivare") {
                  otherUser = chat.bemanningsKonto;
                } else {
                  otherUser = chat.bemannasKonto;
                }

  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <Image
              width={50}
              height={50}
              className="img-fluid rounded-circle"
              src={`${ImagePath}/${otherUser?.image ? otherUser.image : "avtar/3.jpg"}`}
              alt="user"
            />
            <div className="status bg-success" />
          </div>
          <div>
            <span>{otherUser?.name ? otherUser.name : "Cameron Williamson"}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert">
            <i className="icon-info-alt" />
          </div>
          <ContactEdit dropClass="chat-alert" />
        </div>
      </div>
    </div>
  );
};

export default RightChatHeader;