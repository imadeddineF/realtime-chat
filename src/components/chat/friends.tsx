import React from "react";
import pic from "../../../public/assets/pic.jpg";
import OnlineCircle from "./onlineCircle";
import FriendChat from "./friendChat";
import SearchFriend from "./searchFriend";
import Header from "./header";

export default function Friends() {
  return (
    <div className="h-full col-span-3 flex flex-col justify-between bg-gray-400">
      {/* Search for a friend */}
      <SearchFriend />

      {/* Online friends */}
      <div className="flex items-center gap-2 py-3 px-2">
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/1"} />
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/2"} />
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/3"} />
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/4"} />
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/5"} />
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/6"} />
        <OnlineCircle img={pic} username={"imad"} chatLink={"/chat/7"} />
      </div>

      {/* Friends' chats */}
      <div className="h-full">
        <FriendChat
          img={pic}
          username={"imad"}
          lastMessage={"hello there, how are you!"}
          chatLink={"/chat/1"}
        />
        <FriendChat
          img={pic}
          username={"imad"}
          lastMessage={"hello there, how are you!"}
          chatLink={"/chat/2"}
        />
        <FriendChat
          img={pic}
          username={"imad"}
          lastMessage={"hello there, how are you!"}
          chatLink={"/chat/3"}
        />
        <FriendChat
          img={pic}
          username={"imad"}
          lastMessage={"hello there, how are you!"}
          chatLink={"/chat/4"}
        />
        <FriendChat
          img={pic}
          username={"imad"}
          lastMessage={"hello there, how are you!"}
          chatLink={"/chat/5"}
        />
        <FriendChat
          img={pic}
          username={"imad"}
          lastMessage={"hello there, how are you!"}
          chatLink={"/chat/6"}
        />
      </div>

      {/* Profile header */}
      <Header />
    </div>
  );
}
