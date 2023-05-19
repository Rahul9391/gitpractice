
// import React from 'react';
// import './Home.css';
// function Home(props) {
//   var user = props.user;
//   var city = props.city;
//   if (user === "rahul") {
//     return (
//       <div>
//         <h1>Narendra</h1>
//       </div>
//     );
//   }
//   else {
//     return (
//       <div>
//         {/* <div>
//        {student.map((ele)=><p id="p1">{ele.name} got {ele.marks} marks</p>)}</div> */}
//         {/* <h1 >{friends}</h1> */}
//         <h1>{user}</h1> </div>
//     );
//   }

// }
// import React, { Component } from 'react'
import { useState } from 'react';
var nameCounter=0;
var count1=0;
var energy=0;
// export class Home extends Component {
//   state = { person: "rahul", coins: 0, EnergyCounter: 0 };
//    changeName=() =>{
//     if(name%2===0)
//     {
//       this.setState({person:"yadav"});
//       name++;
//     }
//     else{
//       this.setState({person:"rahul"})
//       name++;
//     }
    
//   }
//   coinChange=()=>{
//     this.setState({coins:(this.state.coins+1)})
//     count1++;
//     if(count1%10===0){
//       this.setState({EnergyCounter:(this.state.EnergyCounter+1)})
//     }
//   }
//   lessCoins=()=>{
//     this.setState({coins:(this.state.coins-1)})
//     count1--;
//     // if(count1>10)
//     // {
//     //   this.setState({EnergyCounter:(this.state.EnergyCounter-1)})
//     // }

//   }
//   render() {
//     return (
//       <div>
//         <h1>Hi {this.state.person}</h1>
//         <button onClick={this.changeName}>Change Name</button>
//         <h2>coins:{this.state.coins}</h2>
//         <button onClick={this.coinChange}>more coins</button>
//         <button onClick={this.lessCoins}>less coins</button>
//         <h2>EnergyCounter{this.state.EnergyCounter}</h2>
//       </div>
//     )
//   }
// }
const Home=()=>{
  const[name,setName]=useState("Naruto");
  const[coins,setCoins]=useState(0);
  const[energyCounter,setEnergyCounter]=useState(0);
  const[about,setAbout]=useState("Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure.")
  function changeName(){
    if(nameCounter%2===0)
    {
      setName("Madara");
      setAbout("Madara Uchiha is a fictional manga and anime character in the Naruto series created by Masashi Kishimoto. He appears for the first time in  of the manga and the Shippuden anime adaptation, as a major villain.")
    nameCounter++;
  }
  else{
    setName("Naruto");
    setAbout("Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure.")
    nameCounter++;
  }

  }
  function coinIncrement(){
      count1++;
      if(count1%10===0){
         setEnergyCounter(++energy);
      }
      setCoins(count1);

  }
  const coinDecrement=()=>{
    count1--;
    setCoins(count1);
  }
  return (
    <div>
      <h1>Your Character: {name}</h1>
      <button onClick={changeName}>Change Character</button>
      <h2>Increase {name} Power:{coins} HP</h2>
      <button onClick={coinIncrement}>Power UP</button>
      <button onClick={coinDecrement}>Power Down</button>
      <h2>EnergyCounter:{energyCounter}</h2>
      <h3>About {name}:</h3>
      <p>{about}</p>
    </div>
  )
}

export default Home

