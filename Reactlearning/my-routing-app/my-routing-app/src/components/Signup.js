import React from 'react'
// import { link } from 'react-router-dom'

function Signup() {
    return (
        <div style={{textAlign:'center'}}>
            <h1>Signup</h1>
            <form >
                First Name:<input type="text"></input><br></br>
                Last Name:<input type="text"></input><br></br>
                Create Password:<input type="password"></input><br></br>
                Phone Number:<input type="number"></input><br></br>
                <input type="submit" value="Register"></input>

            </form>
        </div>
    )
}

export default Signup