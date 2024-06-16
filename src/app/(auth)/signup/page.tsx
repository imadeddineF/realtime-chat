"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
// import { useSignIn } from "@/hooks/useFirebaseAuth";
import { Toaster, toast } from "sonner";
import { Icons } from "@/icons/spinner";
import { ModeToggle } from "@/components/shared/modeToggle";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      try {
        toast.success("Login Success!");
      } catch (error: any) {
        toast.error("Login Failed!", {
          description: "The email or password is incorrect.",
        });
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100dvh)] flex items-center justify-center">
      <Toaster richColors />
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <Card className="w-[360px] p-2">
        <CardHeader>
          <CardTitle className="mb-5 text-center">Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                {/* <Label htmlFor="email">Email</Label> */}
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                {/* <Label htmlFor="password">Password</Label> */}
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button disabled={isLoading} className="w-full" type="submit">
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
