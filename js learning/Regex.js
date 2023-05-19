function register() {
	const fname=document.forms['f1']['Firstname'].value;
	const lname=document.forms['f1']['Lastname'].value;
	const email=document.forms['f1']['Email'].value;
	const place=document.forms['f1']['Place'].value;
	const password=document.forms['f1']['Password'].value;
	const cpassword=document.forms['f1']['Confirm_password'].value;
	const phone=document.forms['f1']['PhoneNo'].value;
    const altphone=document.forms['f1']['AltPhNo'].value;
     

	document.getElementById('errmsg').style.visibility="hidden"
    document.getElementById('erfname').style.visibility="hidden"
     document.getElementById('erlname').style.visibility="hidden"
	document.getElementById('eremail').style.visibility="hidden"
	document.getElementById('erpasswd').style.visibility="hidden"
	document.getElementById('erphone').style.visibility="hidden"
	document.getElementById('eraltphone').style.visibility="hidden"
	document.getElementById('ercpasswd').style.visibility="hidden"

     var rfirst_name=/^[a-z]{5,12}$/i;
     var rlast_name=/^[a-z]{5,12}$/i;
     var remail=/(\w|@|#|\$|\*|\.|)+@gmail.com$/
     var rplc=/^[a-z]{3,12}$/i;
     var rpasswd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#])[a-zA-Z0-9!?@#$.]{8,15}$/
     // var rpasswdsp=/(@|#|\$|\*|\.|)/
     var rphone=/^\d{10}$/
     if(fname=="" || password=="" || cpassword=="" || phone=="")
     {
     	document.getElementById('errmsg').style.color="red"
         document.getElementById('errmsg').style.visibility="visible"
     	return false
     }
     else if(!rfirst_name.test(fname))
     {
     	document.getElementById('erfname').style.color="red"
         document.getElementById('erfname').style.visibility="visible"
         return false
     }
     else if(lname)
     {
     	if(!rlast_name.test(lname))
     	{
     		document.getElementById('erlname').style.color="red"
         document.getElementById('erlname').style.visibility="visible"
         return false
     	}
   
     	
     }
     else if(!remail.test(email))
     {
     	document.getElementById('eremail').style.color="red"
         document.getElementById('eremail').style.visibility="visible"
         return false
         }
     else if(!rpasswd.test(password)){
     	document.getElementById('erpasswd').style.color="red"
         document.getElementById('erpasswd').style.visibility="visible"
         return false
     }
     else if(!(password===cpassword)){
     	document.getElementById('ercpasswd').style.color="red"
         document.getElementById('ercpasswd').style.visibility="visible"
         return false
     }
     // else if(!rpasswdsp.test(password)){
     // 	document.getElementById('erpasswd').style.color="red"
     //     document.getElementById('erpasswd').innerHTML="password should contain atleast one special character(@,#,$,*,.)"
     //     return false

     // }
     else if(!rphone.test(phone)){
         document.getElementById('erphone').style.color="red"
         document.getElementById('erphone').style.visibility="visible"
         return false
     }
     else if(altphone)
     {
     	if(!rphone.test(altphone))
     	{
     		document.getElementById('eraltphone').style.color="red"
     		 document.getElementById('eraltphone').style.visibility="visible"
     		 return false
     	}
     }
     else{
         console.log("success")
         return false
     }
}


