import React from 'react'
import './All.css'
function Form1(){
    const [Data,setData]=React.useState({
        email:"",
        password:"",
        Cpassword:"",
        checked:false
    })
    function eventHandler(event){
        const {type,name,value,checked}=event.target
        setData((prevData)=>{
            return {
                ...prevData,
                [name]:type==="checkbox"?checked:value
            }
        })
    }
    function eventSubmit(event){
        event.preventDefault()
          Data.password===Data.Cpassword?console.log("Successfully signed up"):console.log("password do not match")
          if(Data.password===Data.Cpassword){
            Data.checked?console.log("Thankyou for signing up for news letter"):console.log("")
          }
          
    }
    return(
        <div className='formDiv'> 
           <form onSubmit={eventSubmit} className='formInputs'>
            <input type='email' placeholder='email' name='email' value={Data.email} onChange={eventHandler}/>
            <input type='text' placeholder='password' name='password' value={Data.password} onChange={eventHandler}/>
            <input type='password' placeholder='ConfirmPassword' name='Cpassword' value={Data.Cpassword} onChange={eventHandler}/>
            <input type='checkbox' name='checked' checked={Data.checked} onChange={eventHandler}/>
            <label>i want to join news letter</label>
            <button>Sign Up</button>
           </form>
        </div>
    )
}
export default Form1