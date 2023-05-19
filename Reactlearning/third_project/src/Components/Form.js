import React from 'react'
import Formvalid from './Formvalid'
function Form() {
    const err = {
        visibility: "hidden",

    }
    function register(event) {
        const fname = document.forms['f1']['Firstname'].value;
        const lname = document.forms['f1']['Lastname'].value;
        const email = document.forms['f1']['Email'].value;
        const place = document.forms['f1']['Place'].value;
        const password = document.forms['f1']['Password'].value;
        const cpassword = document.forms['f1']['Confirm_password'].value;
        const phone = document.forms['f1']['PhoneNo'].value;
        const altphone = document.forms['f1']['AltPhNo'].value;


        document.getElementById('errmsg').style.visibility = "hidden"
        document.getElementById('erfname').style.visibility = "hidden"
        document.getElementById('erlname').style.visibility = "hidden"
        document.getElementById('eremail').style.visibility = "hidden"
        document.getElementById('erpasswd').style.visibility = "hidden"
        document.getElementById('erphone').style.visibility = "hidden"
        document.getElementById('eraltphone').style.visibility = "hidden"
        document.getElementById('ercpasswd').style.visibility = "hidden"

        var rfirst_name = /^[a-z]{5,12}$/i;
        var rlast_name = /^[a-z]{5,12}$/i;
        var remail = /(\w|@|#|\$|\*|\.|)+@gmail.com$/
        var rplc = /^[a-z]{3,12}$/i;
        var rpasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#])[a-zA-Z0-9!?@#$.]{8,15}$/
        // var rpasswdsp=/(@|#|\$|\*|\.|)/
        var rphone = /^\d{10}$/
        if (fname == "" || password == "" || cpassword == "" || phone == "") {
            document.getElementById('errmsg').style.color = "red"
            document.getElementById('errmsg').style.visibility = "visible"
            event.preventDefault();
        }
        else if (!rfirst_name.test(fname)) {
            document.getElementById('erfname').style.color = "red"
            document.getElementById('erfname').style.visibility = "visible"
            event.preventDefault();

        }
      
        else if (!remail.test(email)) {
            document.getElementById('eremail').style.color = "red"
            document.getElementById('eremail').style.visibility = "visible"
            event.preventDefault();
        }
        else if (!rpasswd.test(password)) {
            document.getElementById('erpasswd').style.color = "red"
            document.getElementById('erpasswd').style.visibility = "visible"
            event.preventDefault();
        }
        else if (!(password === cpassword)) {
            document.getElementById('ercpasswd').style.color = "red"
            document.getElementById('ercpasswd').style.visibility = "visible"
            event.preventDefault();
        }
        // else if(!rpasswdsp.test(password)){
        // 	document.getElementById('erpasswd').style.color="red"
        //     document.getElementById('erpasswd').innerHTML="password should contain atleast one special character(@,#,$,*,.)"
        //     return false

        // }
        else if (!rphone.test(phone)) {
            document.getElementById('erphone').style.color = "red"
            document.getElementById('erphone').style.visibility = "visible"
            event.preventDefault();
        } 
        else if (lname) {
            if (!rlast_name.test(lname)) {
                document.getElementById('erlname').style.color = "red"
                document.getElementById('erlname').style.visibility = "visible"
                event.preventDefault();
            }
        }
        else if (altphone) {
            if (!rphone.test(altphone)) {
                document.getElementById('eraltphone').style.color = "red"
                document.getElementById('eraltphone').style.visibility = "visible"
                event.preventDefault();
            }
        }
        else {
            console.log("success")
            event.preventDefault();
        }
    }


    return (

        <div>

            <form name="f1" onSubmit={register} action="#">
                <span>Firstname<label>*</label>:</span><input type="text" name="Firstname" />
                <p id="erfname" style={{ visibility: "hidden" }}>first name should be between 5 to 12 alphabetic characters</p>
                <span>Lastname:</span><input type="text" name="Lastname" /><br /><br />
                <p id="erlname" style={{ visibility: "hidden" }}>last name should be between 5 to 12 alphabetic characters</p>
                <span>Email<label>*</label>:</span><input type="text" name="Email" /><br />
                <p id="eremail" style={{ visibility: "hidden" }}>Invalid email it should end with eg@gmail.com</p>
                <span>Place:</span><input type="text" name="Place" /><br /><br />
                <span>Password<label>*</label>:</span><input type="text" name="Password" /><br />
                <p id="erpasswd" style={{ visibility: "hidden" }}>password should be  between 8 to 15 charecters
                    and atleast have one special character(@,#,?,!)</p>
                <span>Confirm password<label>*</label>:</span><input type="password" name="Confirm_password" /><br />
                <p id="ercpasswd" style={{ visibility: "hidden" }}>Password didn't match</p>
                <span>PhoneNo<label>*</label>:</span><input type="text" name="PhoneNo" /><br />
                <p id="erphone" style={{ visibility: "hidden" }}>phone number should be 10 digit characters</p>
                <span>AltPhNo:</span><input type="text" name="AltPhNo" /><br /><br />
                <p id="eraltphone" style={{ visibility: "hidden" }}>alternate phone number should be 10 digit characters</p>

                <span>Male:</span><input type="radio" name="gender" />

                <span>Female:</span><input type="radio" name="gender" /><br />

                <input type="submit" value="register" />
            </form>
            <p id="errmsg" style={{ visibility: "hidden" }}>All mandatory fields should be filled</p>


        </div>

    )
}
export default Form

