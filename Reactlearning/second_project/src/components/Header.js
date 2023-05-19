import React from "react";
import './All.css'
import {FaLinkedin,FaVoicemail} from 'react-icons/fa'
function Header() {
    return (
        <header className="header">
            <div className="header-img">
                <img src="http://pngimg.com/uploads/groom/groom_PNG19594.png"></img>
            </div>
            <h2>Aaron Smith</h2>
            <h4>Full Stack Developer</h4>
            <h5>aaronsmith.website</h5>
            <button className="header-btemail"><span><FaVoicemail></FaVoicemail></span>Email</button>
            <button className="header-btlink"><span><FaLinkedin></FaLinkedin></span>Linkedin</button>

        </header>


    )
}
export default Header;