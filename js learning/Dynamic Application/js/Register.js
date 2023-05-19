function registerProcess(){
        var name=document.forms['f1']['firstname'].value;
    var password=document.forms['f1']['password'].value;
    var num=document.forms['f1']['number'].value;
     if((name==null || name=="") || (password==null || password=="") || (num==null || num=="") )
    {
        document.getElementById('errmsg').style.color="red";
                 document.getElementById('errmsg').innerHTML=("Mandatory fields should be filled");
                 return false;
    }
            if(password.length<8){
            document.getElementById('errmsg').style.color="red";
                 document.getElementById('errmsg').innerHTML=("Password should be atleast 8 characters");
                  return false;
            }
            if(password.indexOf('@')==-1 && password.indexOf('$')==-1 && password.indexOf('#')==-1){
            document.getElementById('errmsg').style.color="red";
                 document.getElementById('errmsg').innerHTML=("Password should have special characters like @,$,#");
                  return false;
              }
            var count=0;
            for(var i=0;i<=9;i++)
            {
            if(password.indexOf(i)==-1)
            {
            count++
            }
            }
            if(count==10)
            {
            document.getElementById('errmsg').style.color="red";
                 document.getElementById('errmsg').innerHTML=("Password should have atleast one digit");
                  return false;
            }
            if(num.length!=10){
            document.getElementById('errmsg').style.color="red";
                 document.getElementById('errmsg').innerHTML=("number should be 10 digits");
                  return false;
            }
    
    
    }