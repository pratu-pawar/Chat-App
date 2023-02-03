import { doc, onSnapshot } from "firebase/firestore";
import React from "react"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import{db} from "../firebase"

const Chats= () =>{ 
     const [chats, setChats]= useState([])

     const {currentUser} = useContext(AuthContext)

     useEffect(() =>{ 
          const getChats = () =>{  
               const unsub = onSnapshot(doc(db, "userChats", currentUser.uid),(doc)=>{ 
                    setChats(doc.data());
                     });
                     return () =>{ 
                         unsub();
                };
          };
      currentUser.uid && getChats()
     },[currentUser.uid]);
     console.log(Object.entries(chats()));
    return ( 
        <div className="chats"> 
            <div className="userChat"> 
            <img src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-smiling-woman-red-dress_186202-2909.jpg?w=360&t=st=1675072405~exp=1675073005~hmac=759650ae5611bd93a573774b2274aeee0d63599cd4515a3944e3c53a256db03d"
             alt=""> 
             </img>
            <div className="userChatInfo"> 
            <span>jane</span>
            <p>hello</p>
                 
                 </div> 
            </div>

            <div className="userChat"> 
            <img src="" alt=""></img>
            <div className="userChatInfo"> 
            <span>jane</span>
            <p>hello</p>
                 
                 </div> 
            </div>

            <div className="userChat"> 
            <img src="" alt=""></img>
            <div className="userChatInfo"> 
            <span>jane</span>
            <p>hello</p>
                 
                 </div> 
            </div>

            <div className="userChat"> 
            <img src="" alt=""></img>
            <div className="userChatInfo"> 
            <span>jane</span>
            <p>hello</p>
                 
                 </div>   
            </div>

            <div className="userChat"> 
            <img src="" alt=""></img>
            <div className="userChatInfo"> 
            <span>jane</span>
            <p>hello</p>
                 
                 </div> 
            </div>
        </div>
    )
}

export default Chats;