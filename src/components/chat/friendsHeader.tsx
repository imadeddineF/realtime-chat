import React from "react";
import { UserSearch } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";
import pic from "../../../public/assets/pic.jpg";
import CustomAvatar from "./customAvatar";
import CustomFriendSearch from "./customFriendSearch";

export default function FriendsHeader() {
  return (
    <header className="bg-gray-200 p-2 flex items-center justify-between">
      <h1 className="font-bold text-[22px]">Messages</h1>

      {/* Search for friends */}
      <Dialog>
        <DialogTrigger>
          <UserSearch />
        </DialogTrigger>
        <DialogContent className="max-h-[80%] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="mt-4 mb-2">
              <Input className="focus-visible:ring-0" />
            </DialogTitle>
            <DialogDescription className="flex flex-col overflow-y-scroll h-full">
              <DialogClose asChild>
                <CustomFriendSearch
                  chatLink={"/1"}
                  profileImg={pic}
                  online={false}
                  username={"Imad Eddine"}
                />
              </DialogClose>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}
