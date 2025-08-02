// const { metadata } = require("../home/layout");
import { signOut } from "next-auth/react";
import "../globals.css"
import { SessionWrapper } from "../components/session";
export const metadata = {
  title: "Vendor contact notebook-Home",
  description: "Efficient way of storing contacts",
};

const userlayout = ({children})=>{
    return (
        <>
        <html>
            <head>
            </head>
            <SessionWrapper>
            <body>
            <div className="navbar_login_user">
            <img src="https://cdn-icons-png.freepik.com/256/9697/9697040.png" height={80}></img>
            <h2>Vendor Contack notebook</h2>
            {/* <button onClick={()=>{signOut("google")}}>Signout</button> */}
            </div>
            {children}
            </body>
            </SessionWrapper>
        </html>
        </>
    )
}

export default userlayout;