import { Inter, Poppins, Red_Hat_Display } from "next/font/google";
import "./globals.css";

import { poppins, redhat } from "./font";
import Main from "./Main";

export const metadata = {
  title: "Top Digital Marketing Company in India",

  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${redhat.variable} `}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
