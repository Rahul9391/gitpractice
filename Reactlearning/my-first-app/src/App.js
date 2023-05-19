// import logo from './logo.svg';
// import Aboutus from './Aboutus';
import './App.css';
import Home from './Home';
// import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
// import Register from './Register';
// import Aboutus from './Aboutus';
// import Login from './Login';
// import NoComponentFound from './NoComponentFound';



function App(){
  return (
    // <div className="App">
    //   {/* <Home/> */}
    //   <header className="App-header">
    //     <h1>Animation</h1>


    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <img className="r" src="google.jpg"/> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Home></Home>
    //     <Home></Home>
    //   </header>
    // </div>
    <div className="App">
      {/* <div><h1>I display on the top of the page</h1></div>
      <div style={{height:"250px",backgroundColor:"red"}}><BrowserRouter>
      <Link to='/home'>Home</Link><br></br>
      <Link to='/login'>Login</Link><br></br>
      <Link to='/register'>Register</Link><br></br>
      <Link to='/aboutus'>Aboutus</Link><br></br>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/*' element={<NoComponentFound/>}></Route>
        </Routes>
        
      </BrowserRouter></div>
      <div><h1>display on the bottom of the page</h1></div> */}
      <Home/>
      
    </div>

  );
}

export default App;
