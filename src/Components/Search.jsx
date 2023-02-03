import React from "react"

const Search= () =>{ 
    return ( 
        <div className="search"> 
            <div className="searchForm"> 
                <input type="text" placeholder="find a user"/>
            </div>
            <div className="userChat"> 
            <img src="https://img.freepik.com/free-photo/bright-positive-fashion-studio-portrait-young-girl-with-nude-lips-bright-make-up-stylish-trendy-outfit-pink-skirt-smart-casual_496169-516.jpg?size=626&ext=jpg&ga=GA1.1.1382574233.1675066039"
             alt=""></img>
            <div className="userChatInfo"> 
            <span>jane</span> 
            
            </div>

            </div>
        </div>
    )
}

export default Search;