import logo from './logo.svg';
import './App.css';
import Opening from './Components/Opening';
import React from 'react'
import Quiz from './Components/Quiz'

function App() {
  const[toggle,setToggle]=React.useState(false)

  function toggleHandler(){
    setToggle(prevState=>!prevState)
    console.log(toggle)
  }

  return (
   <div>
    {toggle===false?<Opening toggleHandler={toggleHandler} ></Opening>:<Quiz toggle={toggle}></Quiz>}
    
   </div>
  );
}

export default App;
