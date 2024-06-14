import React from "react";
import pic from "../../../public/assets/pic.jpg";
import OnlineCircle from "./onlineCircle";
import FriendChat from "./friendChat";
import SearchFriend from "./searchFriend";
import Header from "./header";
import { friendsChats, onlineFriends } from "./dummyData";

export default function Friends() {
  return (
    <div className="max-h-screen col-span-3 flex flex-col justify-between bg-gray-400">
      {/* Search for a friend */}
      <SearchFriend />

      {/* Online friends */}
      <div className="flex items-center gap-2 py-4 px-2 overflow-x-scroll overflow-y-hidden scroll-smooth">
        {onlineFriends.map((friend) => (
          <OnlineCircle
            key={friend.id}
            img={pic}
            username={friend.username}
            chatLink={`/chat/${friend.id}`}
          />
        ))}
      </div>

      {/* Friends' chats */}
      <div className="h-full flex flex-col overflow-y-scroll overflow-x-hidden">
        {friendsChats.map((friend) => (
          <FriendChat
            key={friend.id}
            img={pic}
            username={friend.username}
            lastMessage={friend.lastMessage}
            chatLink={`/chat/${friend.id}`}
          />
        ))}
      </div>

      {/* Profile header */}
      <Header />
    </div>
  );
}
