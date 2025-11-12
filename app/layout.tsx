import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "./components/SkipLink";

export const metadata: Metadata = {
  title: "Next Mind Labs",
  description:
    "Playful learning journeys that help young minds recognise and work through cognitive biases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
