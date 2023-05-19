import React from 'react'
import { useState } from 'react'
function Form() {
    const [formData, setformData] = React.useState({
        firstname:"",
        lastname:"",
        email:"",
        comments:"",
        checked:false,
        favCol:""
    })
    
    function eventHandler(event) {
       const {type,name,value,checked}=event.target
        setformData((prevState)=>{
            return {
                ...prevState,
                [name]:type==="checkbox" ?checked:value
            }
        })
    }
function eventSubmit(event){
    event.preventDefault()
    console.log(formData)
}
    
   
    return (
        <div>
            <form onSubmit={eventSubmit}>
                <input type='text' placeholder='first name' name="firstname"  onChange={eventHandler}value={formData.firstname}/>
                <input type='text' placeholder='last name' name="lastname" onChange={eventHandler} value={formData.lastname}/>
                <input type='text' placeholder='email' name="email" onChange={eventHandler} value={formData.email}/>
                <textarea name='comments' onChange={eventHandler} value={formData.comments}/>
                <input type='checkbox' name="checked" checked={formData.checked} onChange={eventHandler}/>
                <select name="favCol" onChange={eventHandler} value={formData.favCol}>
                    <option value="">choose</option> 
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Yellow</option>
                </select>
                <button>submit</button>
                
            </form>
         <h3>{formData.firstname}</h3>
         <h3>{formData.lastname}</h3>
         <h5>{formData.email}</h5>
         <p>{formData.comments}</p>
         <h5>{formData.favCol}</h5>
        </div>
    )
}
export default Form 