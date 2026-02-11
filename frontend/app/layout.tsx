import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduble | Student Performance Tracking",
  description: "Real-time student performance platform for Gen Z parents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-eduble-light text-eduble-slate">
      </body>
    </html>
  );
}
