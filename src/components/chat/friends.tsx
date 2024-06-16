import React from "react";
import pic from "../../../public/assets/pic.jpg";
import OnlineCircle from "./onlineCircle";
import FriendChat from "./friendChat";
import FriendsHeader from "./friendsHeader";
import Header from "./header";
import { friendsChats, onlineFriends } from "./dummyData";

export default function Friends() {
  return (
    <div className="max-h-screen col-span-3 flex flex-col justify-between bg-gray-400">
      {/* Search for a friend */}
      <FriendsHeader />

      {/* Online friends */}
      <div className="flex items-center gap-2 py-4 px-2 overflow-x-scroll scrollbar-hide overflow-y-hidden scroll-smooth">
        {onlineFriends.map((friend) => (
          <OnlineCircle
            key={friend.id}
            img={pic}
            username={friend.username}
            chatLink={`/${friend.id}`}
          />
        ))}
      </div>

      {/* Friends' chats */}
      <div className="h-full flex flex-col overflow-y-scroll scrollbar-hide overflow-x-hidden">
        {friendsChats.map((friend) => (
          <FriendChat
            key={friend.id}
            img={pic}
            username={friend.username}
            lastMessage={friend.lastMessage}
            lastMessageTime={"11:11PM"}
            chatLink={`/${friend.id}`}
          />
        ))}
      </div>

      {/* Profile header */}
      <Header />
    </div>
  );
}
