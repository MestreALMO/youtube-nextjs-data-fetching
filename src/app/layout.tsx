import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "youtube.com/@DeveloperALMO",
  description: "Like the video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mainLayoutTitle">
          <h1>youtube.com/@DeveloperALMO</h1>
          <h2>André Lusegardis</h2>
          <hr className="mainLayoutHr" />
        </div>
        {children}
      </body>
    </html>
  );
}
