import React from "react"

const Navbar = () =>{ 
    return ( 
        <div className="navbar"> 
          <span className="logo">Lama Chat</span>
           <div className="user"> 
           <img src="https://image.freepik.com/free-photo/man-city_144627-14213.jpg"
            alt=""></img>
           <span>john</span>
           <button>Logout</button>

           </div>
        </div>
    )
}

export default Navbar;