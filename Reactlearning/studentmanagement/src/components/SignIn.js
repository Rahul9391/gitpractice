import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 

class SignIn extends Component {
  state={
    username:'',
    password:'',
    usererror:""
    
  }
   userNameHandle= (e)=>{
       return   this.setState({username:e.target.value});
  }
  passwordHandle= (e)=>{
    return   this.setState({password:e.target.value});
}
valid=()=>{
  if(this.state.username!=="rahul"){
    this.setState({usererror:"inavlid"})
    return false
}

}
 validation(e){
  e.preventDefault();
 let error=this.valid();

 }

 
  render() {
    
    return (
      <form onSubmit={this.validation}>
      <div>
        <label>username</label><br/>
        <input type="text" value={this.state.username} onChange={this.userNameHandle}/>
        <div>{this.state.usererror}</div>
      </div>
      <div>
        <label>password</label><br/>
        <input type="password" value={this.state.password} onChange={this.passwordHandle}/>
      </div>
      <button type='submit'>SignIn</button>
    
   </form>
    )
  }
}
export default SignIn



