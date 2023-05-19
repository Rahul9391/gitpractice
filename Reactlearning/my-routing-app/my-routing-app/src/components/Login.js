import React from 'react'

function Login() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Log in</h1>
      <form style={{textAlign:"center"}} >
                UserName:<input type="text"></input><br></br>
                Password:<input type="password"></input><br></br>
                <input type="submit" value="login"></input>

            </form>
    </div>
  )
}

export default Login