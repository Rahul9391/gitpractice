import logo from './logo.svg';
// import './App.css';
import First from './First';
import Header from './Header';
import Footer from './Footer';
import Display from './Display';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card'
import Contact from './components/Contact'
import logo1 from './components/Images/men.png'
import Body from './components/Body'
import Jokes from './components/Jokes'
import JokesData from './components/JokesData'
import ContactData from './components/ContactData';
import './Main.css'
function App() {
  // const newJokesData=JokesData.map((joke,index)=>{
  //   return <Jokes setup={joke.setup} punchline={joke.punchline} ind={index}></Jokes>
  // })
  // console.log(newJokesData)

  const newContactData=ContactData.map(cat=>
  <Contact 
    key={cat.id} 
    // img={cat.img} 
    // name={cat.name} 
    // phone={cat.phone}
    // openspot={cat.openspot}
    // location={cat.location}
    item={cat}
    ></Contact>)
  return (
    // <div className="App">
     
     
   
    // </div>
   <div className='sec'>
    {newContactData}
    </div>
    
       
  );
}

export default App;
