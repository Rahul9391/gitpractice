import logo from './logo.svg';
import React from 'react'
import './App.css';
import Jokes from './Components/Jokes'
import Form from './Components/Form'
import FormFocus from './Components/FormFocus';
import Travel from './Components/Travel'
import TravelHeader from './Components/TravelHeader';
import TravelData from './Components/TravelData'
import Box from './Components/Box'
import BoxData from './Components/BoxData'
function App() {
 const [newBox,setNewBox]=React.useState(BoxData)
const updateBox=newBox.map((item)=><Box key={item.id}  obj={item.on} toogle={toogle} id={item.id}></Box>)
function toogle(id){
  setNewBox((prevBox)=>{
    const modifiedArray= prevBox.map((singleObject)=>{
      return singleObject.id===id?{...singleObject,on:!singleObject.on}:singleObject
    })
    return modifiedArray
  }
  
  )
}
// return {...prevBox,
//   on:!prevBox.on}

  const newTravel=TravelData.map((travel)=><Travel key={travel.title} travelling={travel} ></Travel>)
  return (
    // <div className="App">
    //   <Form></Form>
    //  {/* <Jokes setup="How did Helen Keller pierce her ear?"
    //  punchline={10}
    //  />
    //  <Jokes setup="Why didn't the cashier get the punchline?"
    //  punchline="It didn't register."
    //  />
    //  <Jokes setup="The inventor of the dissapointing punchline has died"
    //  punchline="His funeral will be held on Thursday at 2pm."
    //  />
    //  <Jokes setup="A giraffe walks into a bar, he sits and orders 6 martinis........"
    //  punchline="Shame on you for wanting a punchline.This giraffe needs help."
    //  /> */}
    // </div>
    <div>
      {/* <Form/> */}
      {/* <FormFocus/> */}
      {/* <TravelHeader></TravelHeader>
      {newTravel} */}
      
      <h1>hiii </h1>
      {updateBox}
    </div>
  );
}

export default App;
