import React from "react";
import ChatHeader from "@/components/chat/chatHeader";
import InputMessage from "@/components/chat/inputMessage";
import Messages from "@/components/chat/messages";
import pic from "../../../../public/assets/pic.jpg";

export default function Friends({ params }: { params: { slug: string } }) {
  return (
    <div className="col-span-9 bg-blue-300 flex flex-col justify-between">
      {/* My Friend: {params.slug} */}
      <ChatHeader username={"Imad"} img={pic} />
      <Messages />
      <InputMessage />
    </div>
  );
}
