import Link from "next/link";
import "../globals.css"
import { SessionWrapper } from "../components/session.js";

export const metadata = {
  title: "Vendor contact notebook",
  description: "Efficient way of storing contacts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body>
        <div className="navbar">
            <img src="https://cdn-icons-png.freepik.com/256/9697/9697040.png" height={80}></img>
            <h2>Vendor Contack notebook</h2>
            <Link href={"/login"}><button  className="sign">Sign in</button></Link>
        </div>
        {children}
      </body>
      </SessionWrapper>
    </html>
  );
}
