import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import {Nunito} from "next/font/google"


export const metadata = {
  title: "Aribnb",
  description: "Aribnb clone",
};

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}