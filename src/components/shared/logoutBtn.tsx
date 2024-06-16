import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutBtn() {
  const router = useRouter();

  // Logout
  const handleLogout = () => {
    // Cookies.remove("loggedin");
    // sessionStorage.removeItem("user");
    // router.push("/login");
    toast.success("You have been logged out");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you absolutely sure you want to logout of your account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
