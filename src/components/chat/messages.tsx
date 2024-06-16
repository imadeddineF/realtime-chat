import React from "react";
import pic from "../../../public/assets/pic.jpg";
import UserMessage from "./userMessage";
import FriendMessage from "./friendMessage";

export default function Messages() {
  return (
    <div className="h-full overflow-y-scroll overflow-x-hidden w-full p-5">
      {/* user */}
      <UserMessage
        profileImg={pic}
        userName="John Doe"
        msgContent={"I just wanna say hello!"}
        time="14:30 PM"
        isSent={true}
        isSeen={true}
        seen={"14:31 PM"}
      />

      {/* friend */}
      <FriendMessage
        profileImg={pic}
        msgContent={"I just wanna say hello!"}
        userName={"Imad Eddine"}
        time={"14:32 PM"}
        isSent={true}
        isSeen={false}
      />
    </div>
  );
}
