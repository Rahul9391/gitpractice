// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Image from './components/Image';


function App() {

  return (
    <div>
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
      <div><Header /></div>
      <div className='d-flex'>

        <BrowserRouter>
          <div className='div1 col-2'>
            <Link to='/login'>Login</Link><br></br>
            <Link to='/signup'>Signup</Link><br></br>
            <Link to='/home'>Home</Link><br></br>
            <Link to='/aboutus'>Aboutus</Link>
          </div>
          <div className='div2 col-7' style={{border:"green solid 2px", height:"40vw",backgroundColor:"violet" }}>

            <Routes>
              <Route path='/' exact element={<Signup />}></Route>
              <Route path='/signup' exact element={<Signup />}></Route>
              <Route path='/login' exact element={<Login />}></Route>
              <Route path='/home' exact element={<Home />}></Route>
              <Route path='/aboutus' exact element={<Aboutus />}></Route>
            </Routes>
          </div>
          <div className='div3 col-3'>
            <h1>Images</h1>
            <Image></Image>
          </div>
        </BrowserRouter>
      </div><br></br>

      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}><Footer /></div>
    </div>
  );
}

export default App;
