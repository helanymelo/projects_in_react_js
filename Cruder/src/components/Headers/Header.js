import React from "react";
import "./header.css"
import {Link} from "react-router-dom";
import {BsFillArrowLeftCircleFill } from "react-icons/bs";


function Header (){
    return(
       <header>
           <div className="container">
                
                    <Link to="/">
                        <BsFillArrowLeftCircleFill/>
                     </Link>
               
           </div>
       </header>
    )
}

export default Header;