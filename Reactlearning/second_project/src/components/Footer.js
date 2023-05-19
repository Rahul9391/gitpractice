import React from "react";
import './All.css'
import {FaFacebook,FaTwitter,FaGithubAlt,FaInstagram} from "react-icons/fa"
function Footer(){
    return(
        <footer className="foot">
            <div className="foot-icons">
            <FaTwitter size="2em" color="whitesmoke" className="icon"></FaTwitter>
           <FaFacebook size="2em" color="whitesmoke" className="icon"></FaFacebook>
           <FaInstagram size="2em" color="whitesmoke" className="icon"></FaInstagram>
           <FaGithubAlt size="2em" color="whitesmoke" className="icon"></FaGithubAlt>
           </div>
        </footer>
    )
}
export default Footer;