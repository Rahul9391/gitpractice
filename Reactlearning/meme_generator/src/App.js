import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Header from './Components/Header'
import InputSection from './Components/InputSection';
import Time from './Components/Time';
import data from './Components/data'
import {FaStar} from 'react-icons/fa'
import Count from './Components/Count'
import Star from './Components/Star'
import Header1 from './Components/Header1'
import Body from './Components/Body'
import WindowTracker from './Components/WindowTracker';
function App() {
  const[show,setShow]=React.useState(true)
  const [isGoingOut,setIsGoingOut]= React.useState(true)
  const [newThingsArray,setNewThingsArray]=React.useState(["things 1","things 2"])
  const [count,setCount]=React.useState(0)
  const [newObj,setNewObj]=useState({
    title:"Mount Fuji",
location:"Japan",
startDate:"24 jan 2021",
endDate:"27 jan 2021",
isFavourite: true})

const [name,setName]=React.useState("joe")

  function addItem(){
    setCount((prevCount)=>prevCount+1)
  }
  function subItem(){
    setCount((prevCount)=>prevCount-1)
  }
 
  function fun2(){
   
    setNewThingsArray((previousThingsArray)=>[...previousThingsArray,`things ${previousThingsArray.length+1}`])
  }
  function fun3(){
    for(var i=1;i<=1;i++)
      {
        newThingsArray.pop()
       
      }
    setNewThingsArray((previousThingsArray)=>[...previousThingsArray])
   
  }
 
  const updateArray=newThingsArray.map((value)=><p key={value}>{value}</p>)

  // {
  //   return {...prevState,isFavourite:!prevState.isFavourite}
  
  // }
  // let [counter,setCounter]=React.useState(0)
  // prevState.isFavourite:!prevState.isFavourite
  // function increase(){
  //        setCounter((oldValue)=>oldValue+1)
       
  // }
  // function decrease(){
  //        setCounter(oldValue=>oldValue-1)
       
  // }
  
  // const newArray=thingsArray.map((things)=><p key={things}>{things}</p>)
  function changeIcon(){
    setNewObj((prevState)=>{
      return {...prevState,isFavourite:!prevState.isFavourite}
    })
  }
  
  return (
    // 
    // 
    <div>
      {/* <button onClick={addItem}>Add</button>
       <Count number={count}></Count>
       <button onClick={subItem}>sub</button>

       <div>
        <h1>{newObj.title}</h1>
        <h2>{newObj.location}</h2>
        <Star isFilled={newObj.isFavourite} changeImg={changeIcon}></Star>
        <Header1 name={name}></Header1>
        <Body name={name}></Body>
       </div> */}
       {/* <Header></Header>
       <InputSection></InputSection> */}
       <button onClick={()=>setShow(!show)}>Toggle window tracker</button>
       {show&&<WindowTracker></WindowTracker>}
    </div>
  );
}

export default App;
