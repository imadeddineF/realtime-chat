import Friends from "@/components/chat/friends";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen grid grid-cols-12">
        <div className="h-screen grid grid-cols-12">
          <Friends />
          {children}
        </div>
      </body>
    </html>
  );
}
