import React, { useState } from 'react'
import './Main.css'
// import data from './data'
import { useEffect } from 'react'
export default function InputSection(){




    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImg:""
    })
    const [allMemeImages,setAllMemeImages]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        // .then(data=> setAllMemeImages(data.message))
        .then(data=>setAllMemeImages(data.data.memes))
    },[])

   
    function getImg(){
        let res=Math.floor(Math.random()*allMemeImages.length);
        console.log(res)
        setMeme((prevMeme)=>{
            return {...prevMeme,
                randomImg:allMemeImages[res].url
            }
            }
        )    
    }
    function eventHandler(event){
       
        const {name,value}=event.target
        setMeme((prevState)=>({...prevState,[name]:value}))

    }
    return(
        <div className='formMain'>
            <div action="#" className='formSection' >
              <input type="text" className='forminput1' name='topText' value={meme.topText} onChange={eventHandler}></input>
              <input type="text" className='forminput2' name='bottomText' value={meme.bottomText} onChange={eventHandler}></input><br></br>
              <button className='formButton' onClick={getImg}>Get a new meme image</button>
              <div className='meme'>
              <img src={meme.randomImg} alt=""  width="50%"/>
              <h3>{meme.topText}</h3>
              <h3>{meme.bottomText}</h3>
           
              </div>
            </div>

        </div>
    )
}



