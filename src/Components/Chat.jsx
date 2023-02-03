import React from "react"
import Call from "../img/Call.png"
import Cam from "../img/Cam.png"
import More from "../img/More.png"
import Input from "./Input"
import Messages from "./Message"

const  Chat = () =>{ 
    return ( 
        <div className="chat"> 
         <div className="chatInfo"> 
         <span>jane</span>
         <div className="chatInfo"> 
         <img src={Call} alt=""></img>
         <img src={Cam}alt=""></img>
         <img src={More} alt=""></img>
         </div>
           </div>
         <Messages/>
         <Input/>
         </div>
    )
}

export default Chat;  