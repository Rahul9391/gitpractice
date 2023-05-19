import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Abc from './components/LifeCycle';
import Mount from './components/Mount';



function App() {
  return (
    <div className="App">
     
     <Home></Home>
     
      {/* <Home></Home> */}
       {/* <SignIn/> */}
      
  
      {/* <Navbar></Navbar>
      <Home></Home> */}
      {/* <Home></Home> */}
  
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
