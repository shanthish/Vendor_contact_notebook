// import { SessionWrapper } from "../components/session";
import "../../globals.css"
const loginlayout = ({children})=>{
    return(
        <>
        <html lang="en">
        {/* <SessionWrapper> */}
            <body>
             <div className="navbar_login">
            <img src="https://cdn-icons-png.freepik.com/256/9697/9697040.png" height={80}></img>
            <h2>Vendor Contack notebook</h2>
            </div>
            {children}
            </body>
        {/* </SessionWrapper> */}
        </html>
        </>
    )
}
export default loginlayout;