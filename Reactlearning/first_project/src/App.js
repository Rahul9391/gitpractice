import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header'
import Body from './components/Body';
import React from 'react'



function App() {

  const[toggle,setToggle]=React.useState(()=>JSON.parse(localStorage.getItem("toggle"))|| false)

const data=["thing 1","thing 2","thing 3"]



const[arr,setArr]=React.useState(data)

function eventHandle(){
  setArr(prevState=>[...prevState,])
}
const newData=arr.map((item,index)=><p key={index} >{item}</p>)

  function  evnthandler(){
    setToggle((prevState)=>!prevState)

    console.log("clicked")
  }
  
  const styles={
    backgroundColor:toggle?"white":"black" ,
    color: toggle?"black":"white"
  }
  
  React.useEffect(()=>{
    localStorage.setItem("toggle",JSON.stringify(toggle))
    // console.log((JSON.stringify(toggle)))
  },[toggle])
  return (
    <div style={styles}>
           <Header event={evnthandler} toggle={toggle}></Header>
           <Body toggle={toggle}></Body>
           {newData}
    </div>
   
  );
}

export default App;
