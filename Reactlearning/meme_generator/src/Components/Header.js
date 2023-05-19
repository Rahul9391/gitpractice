import React from 'react'
import {BsEmojiLaughing} from 'react-icons/bs'
import './Main.css'
function Header(){

    
    return(
        <header className='headerMain'>
            <BsEmojiLaughing  className="headerIcon" size='2em'></BsEmojiLaughing>
            <h2 className='headerHeading'>Meme Generator</h2>
            <h4 className='headerCourse'>React Course - Project 3</h4>
        </header>
    )
}
export default Header