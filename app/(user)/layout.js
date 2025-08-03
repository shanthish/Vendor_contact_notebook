// // const { metadata } = require("../home/layout");
// import { signOut } from "next-auth/react";
// import "../globals.css"
// import { SessionWrapper } from "../components/session";
// export const metadata = {
//   title: "Vendor contact notebook-Home",
//   description: "Efficient way of storing contacts",
// };

// const userlayout = ({children})=>{
//     return (
//         <>
//         <html>
//             <head>
//             </head>
//             <SessionWrapper>
//             <body>
//             <div className="navbar_login_user">
//             <img src="https://cdn-icons-png.freepik.com/256/9697/9697040.png" height={80}></img>
//             <h2>Vendor Contack notebook</h2>
//             {/* <button onClick={()=>{signOut("google")}}>Signout</button> */}
//             </div>
//             {children}
//             </body>
//             </SessionWrapper>
//         </html>
//         </>
//     )
// }

// export default userlayout;

import { signOut } from "next-auth/react";
import Link from "next/link";
import "../globals.css";
import { SessionWrapper } from "../components/session";

export const metadata = {
  title: "Vendor Contact Notebook - Home",
  description: "Efficient way of storing contacts",
};

const UserLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <SessionWrapper>
          <div className="navbar_login_user">
            <img
              src="https://cdn-icons-png.freepik.com/256/9697/9697040.png"
              height={80}
              alt="Vendor Logo"
            />
            <h2>Vendor Contact Notebook</h2>
          </div>

          <nav className="navbar_crud_links">
            <Link href="/home" className="nav_button">Home</Link>
            <Link href="/vendors/create" className="nav_button">Add Vendor</Link>
             <Link href="/vendors/update" className="nav_button">Update Vendor</Link>
             <Link href="/vendors/delete" className="nav_button">Delete Vendor</Link>
            {/* <button onClick={() => signOut()} className="nav_button">Sign Out</button> */}
          </nav>

          <main>{children}</main>
        </SessionWrapper>
      </body>
    </html>
  );
};

export default UserLayout;
