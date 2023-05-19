import React from 'react'
function FormFocus() {
    function register(event) {
        const fname = document.forms['f1']['Firstname'].value;
        const lname = document.forms['f1']['Lastname'].value;
        const email = document.forms['f1']['Email'].value;
        // const place = document.forms['f1']['Place'].value;
        const password = document.forms['f1']['Password'].value;
        const cpassword = document.forms['f1']['Confirm_password'].value;
        const phone = document.forms['f1']['PhoneNo'].value;
        // const altphone = document.forms['f1']['AltPhNo'].value;

        // document.getElementById('errmsg').style.display = "none"
        document.getElementById('erfname').style.display = "none"
        document.getElementById('erlname').style.display = "none"
        document.getElementById('eremail').style.display = "none"
        document.getElementById('erpasswd').style.display = "none"
        document.getElementById('erphone').style.display = "none"
        // document.getElementById('eraltphone').style.display = "none"
        document.getElementById('ercpasswd').style.display = "none"

        var rfirst_name = /^[a-z]{5,12}$/i;
        var rlast_name = /^[a-z]{5,12}$/i;
        var remail = /(\w|@|#|\$|\*|\.|)+@gmail.com$/
        var rplc = /^[a-z]{3,12}$/i;
        var rpasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#])[a-zA-Z0-9!?@#$.]{8,15}$/
        // var rpasswdsp=/(@|#|\$|\*|\.|)/
        var rphone = /^\d{10}$/

        if (!rfirst_name.test(fname)) {
            document.getElementById('erfname').style.color = "red"
            document.getElementById('erfname').style.display = "block"
            event.preventDefault();

        }
        //  if (lname) {
        //         if (!rlast_name.test(lname)) {
        //             document.getElementById('erlname').style.color = "red"
        //             document.getElementById('erlname').style.display = "block"
        //             event.preventDefault();
        //         }
        //     }
        else if (!rlast_name.test(lname)) {
                    document.getElementById('erlname').style.color = "red"
                    document.getElementById('erlname').style.display = "block"
                    event.preventDefault();
                }
         else if (!remail.test(email)) {
            document.getElementById('eremail').style.color = "red"
            document.getElementById('eremail').style.display = "block"
            event.preventDefault();
        }
        else if (!rpasswd.test(password)) {
            document.getElementById('erpasswd').style.color = "red"
            document.getElementById('erpasswd').style.display = "block"
            event.preventDefault();
        }
        else if (!(password === cpassword)) {
            document.getElementById('ercpasswd').style.color = "red"
            document.getElementById('ercpasswd').style.display = "block"
            event.preventDefault();
        }
        // else if(!rpasswdsp.test(password)){
        // 	document.getElementById('erpasswd').style.color="red"
        //     document.getElementById('erpasswd').innerHTML="password should contain atleast one special character(@,#,$,*,.)"
        //     return false

        // }
        else if (!rphone.test(phone)) {
            document.getElementById('erphone').style.color = "red"
            document.getElementById('erphone').style.display = "block"
            event.preventDefault();
        } 
        // else if (lname) {
        //     if (!rlast_name.test(lname)) {
        //         document.getElementById('erlname').style.color = "red"
        //         document.getElementById('erlname').style.display = "block"
        //         event.preventDefault();
        //     }
        // }
        // else if (altphone) {
        //     if (!rphone.test(altphone)) {
        //         document.getElementById('eraltphone').style.color = "red"
        //         document.getElementById('eraltphone').style.display = "visible"
        //         event.preventDefault();
        //     }
        // }
        else {
            console.log("success")
            event.preventDefault();
        }
    }
    return (
        <div >
            <form name="f1" onSubmit={register} action="#">
                <div className='container mt-5 py-3 bg-warning text-dark' style={{borderRadius:"7px",paddingRight:"110px"}}>
                <div className='row my-3'>
                    <div className='col text-end' >
                        <span>Firstname:</span>
                    </div>
                    <div className='col '>
                        <input type="text" placeholder='Enter firstname' name="Firstname" />
                    </div>

                </div>
                <div className='row text-center'>
                  <label id="erfname" style={{display:"none",marginLeft:"90px"}}>first name should be between 5 to 12 alphabetic characters</label>
                </div>
              
                <div className='row my-3'>
                    <div className='col text-end'>
                        <span>Lastname:</span>
                    </div>
                    <div className='col '>
                        <input type="text" placeholder='Enter lastname' name="Lastname" onFocus={register}/>
                    </div>

                </div>
                <div className='row text-center'>
                  <label id="erlname" style={{display:"none",marginLeft:"90px"}}>last name should be between 5 to 12 alphabetic characters</label>
                </div>
              
                <div className='row my-3'>
                    <div className='col text-end'>
                        <span>Email:</span>
                    </div>
                    <div className='col'>
                        <input type="text" placeholder='Enter email' name="Email" onFocus={register}/>
                    </div>

                </div>
                <div className='row text-center'>
                  <label id="eremail" style={{display:"none",marginLeft:"90px"}}>Invalid email it should end with eg@gmail.com</label>
                </div>
                <div className='row my-3'>
                    <div className='col text-end'>
                        <span>Password:</span>
                    </div>
                    <div className='col'>
                        <input type="text" placeholder='Enter password' name="Password" onFocus={register}/>
                    </div>

                </div>
                <div className='row text-center'>
                  <label id="erpasswd" style={{display:"none",marginLeft:"90px"}}>password should be  between 8 to 15 charecters
                    and atleast have one special character(@,#,?,!)</label>
                </div>
                <div className='row my-3'>
                    <div className='col text-end'>
                        <span>ConfirmPassword:</span>
                    </div>
                    <div className='col'>
                        <input type="text" name="Confirm_password" onFocus={register}/>
                    </div>

                </div>
                <div className='row text-center'>
                  <label id="ercpasswd" style={{display:"none",marginLeft:"90px"}}>Password didn't match</label>
                </div>

                <div className='row my-3'>
                    <div className='col text-end'>
                        <span>PhoneNo:</span>
                    </div>
                    <div className='col'>
                        <input type="text" name="PhoneNo" onFocus={register}/>
                    </div>

                </div>
                <div className='row text-center'>
                  <label id="erphone" style={{display:"none",marginLeft:"90px"}}>phone number should be 10 digit characters</label>
                </div>
                <div className='row my-3 text-center'>
                    <div>
                    <input type="submit" value="register" className="btn btn-success"  style={{marginLeft:"90px"}}/>
                    </div>
                    
                </div>
                </div>

                
            </form>


        </div>
    )
}
export default FormFocus