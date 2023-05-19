import React, { useState } from 'react'
import axios from 'axios'

function Home() {
  const[users,setUsers]=useState([])
  const getUsers=()=>{
    var dataUrl='https://jsonplaceholder.typicode.com/users';
    axios.get(dataUrl).then((res)=>{
   console.log(res.data);
   setUsers(res.data);
    });
  }
  return (<>
    <h1 style={{textAlign:"center"}}>The Users</h1>
    

  <div style={{textAlign:"center"}}>{users.map((user) =>{ return( <div>{user.name}{user.id}</div>  )
    } ) }</div> 
    <div style={{textAlign:"center"}}><button onClick={getUsers}>clickHere</button></div>
    
    {/* onClick={getUsers} */}
 
    </>
  )
}

export default Home