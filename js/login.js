// login

var email = document.getElementById("email");
var password = document.getElementById("password");


// register
var username = document.getElementById("name");
var email1 = document.getElementById("email1");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password");
var phone=document.getElementById("phone");
var male = document.getElementById("male");
var female = document.getElementById("female");



////// error message

var user_error=document.getElementById("user_error");
var email_error=document.getElementById("email_error");
var password_error=document.getElementById("password_error");
var phone_error=document.getElementById("phone_error");



/// toggle button control
var loginform=document.getElementById("login");
var registerform=document.getElementById("register");
var btn = document.getElementById("btn");

function login(){
    
    loginform.style.left = "50px";
    registerform.style.left ="450px"
    btn.style.left="0px"


}

function register()
{


    loginform.style.left = "-400px";
    registerform.style.left ="50px"
    btn.style.left="110px"

}


var valid = true;

function validateForm(e)
 {
     e.preventDefault();
     valid = true;
 
    

 
        if (username.value == "" ) {
            username.style.border="red";
            valid = false;
            user_error.style.visibility="visible"
            console.log("invalid user");
         
        }

        if (email1.value == ""  ) {
             email1.style.borderColor="red";
             valid = false;
             console.log("invalid email");
             email_error.style.visibility="visible";
          
         }
     
 
         if (password1.value=='') 
         {
             password1.style.borderColor="red";

             valid = false;
             console.log("invalid password");
             password_error.style.visibility="visible";
             
         }
        //  if (password2.value==''||password2.value!=password1.value) 
        //  {
        //      password2.style.borderColor="red";

        //      valid = false;
        //      console.log("invalid password1");
             
        //  }
         if(phone.value == '')
         {
             phone.style.borderColor="red";
            
             valid = false;
             console.log("invalid phone");
             phone_error.style.visibility="visible";
     
         }
         else if(phone.value.length<11)
         {
             phone.style.borderColor="red";
           
             valid = false;
             console.log("invalid phone");
             phone_error.style.visibility="visible";
             
         }
        //  if(age.value == '')
        //  {
        //      age.style.borderColor="red";
        //      message5.style.display=style=" contents";
        //      valid = false;
     
        //  }
 
 
     if(valid)
     {
        newset();
        
         
     }
 
 
             
    
 }
 

















function resetForm() {
    if(valid)
    {
        id.value = "";
         name1.value = "";
         email.value = "";
         phone.value = "";
         age.value = "";
         msg.textContent = "";

        
    }
 }
 




 var arr =[];    /////// array to push objects


////////////// function set data to local sorage first time
function register_data() {
    let obj = {
        name:username.value,
        email:email1.value,
        phone:phone.value,
        password:password1.value,
        gender:male.value
    }
    //arr.push(obj);

    

    let setitem = JSON.stringify(arr);
    localStorage.setItem("data",setitem);


    
}


function getlocal() {
    let result = JSON.parse(localStorage.getItem("data"));
    return result;
    
}



function newset()
{
    let obj = {
        name:username.value,
        email:email1.value,
        phone:phone.value,
        password:password1.value,
        gender:male.value
    }
    
    var m =false;
    
    if(getlocal()==null)
    {
        register_data();


    }
    else
    {
        arr = getlocal();
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].email==email1.value&&arr[i].phone==phone.value)
            {
                m=true;
                break;

            }
            
        }
    }
 
    if(m)
    {
        email_error.style.visibility="visible";
        console.log("change email");
     
    }
    else
    {
        arr.push(obj);
        let setitem = JSON.stringify(arr);
        localStorage.setItem("data",setitem);
        console.log("done");
       
        
    }

}


registerform.addEventListener("submit",validateForm);