// login

var email = document.getElementById("email");
var password = document.getElementById("password");


// register
var username = document.getElementById("name");
var email1 = document.getElementById("email1");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var phone=document.getElementById("phone");
var gender = document.getElementsByName("gender");
var pic =document.getElementById("file");

// var male = document.getElementById("male");
// var female = document.getElementById("female");



////// error message
// login error
var user_error=document.getElementById("error1");
var email_error=document.getElementById("email_error");
var password_error=document.getElementById("password_error");

var register_error=document.getElementById("register_error");
// var phone_error=document.getElementById("phone_error");



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

//////////////////// Validation ////////////////
var valid = true;

function validateForm(e)
 {
     e.preventDefault();
     valid = true;
     register_error.style.visibility="hidden";
     register_error.innerText ="";
    console.log(pic.value);

     //console.log(gender.value);
 
        if (username.value == "" ) {
            valid = false;
           
         
        }

        if (email1.value == ""  ) {
             valid = false;
             
          
         }
     
 
         if (password1.value=='' || password2.value=='') 
         {
              valid = false;
             
             
         }
         if (password1.value != password2.value) 
         {
             valid = false;
             register_error.innerText +=" passwords not matching "
             register_error.style.visibility="visible";
             
         }
         if(phone.value == '')
         {
             valid = false;
             console.log("invalid phone");
             //phone_error.style.visibility="visible";
     
         }
         else if(phone.value.length<11)
         {
              valid = false;
             console.log("invalid phone");
             //phone_error.style.visibility="visible";
             
         }
        
        var gender = document.getElementsByName("gender");

        var x= false;
        for (let i = 0; i < gender.length; i++) {
            if(gender[i].checked)
            {
               x=true;
                break;
            }
            else if(gender[i+1].checked)
            {
               x=true;
                break;
            }
            else
            {
                valid=false;
                register_error.innerText+=" select gender "
                register_error.style.visibility="visible";
            }
            
        
        }
        if(x=false)
        {
           
        }
 
 
     if(valid)
     {
        newset();
        
         
     }
 
 
             
    
 }
 

















function resetForm() {
   
        username.value = "";
        email1.value = "";
        phone.value = "";
        password1.value = "";
        password2.value = "";

        email.value="";
        password.value="";
        
        
 }
 




 var arr =[];    /////// array to push objects


////////////// function set data to local sorage first time
function register_data() {
    let obj = {
        name:username.value,
        email:email1.value,
        phone:phone.value,
        password:password1.value,
        gender:male.value,
        pic:pic.value
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
        gender:male.value,
        pic:pic.value
    }
    
    var m =false;
    
    if(getlocal()==null)
    {
        register_data();
        resetForm();


    }
    else
    {
        arr = getlocal();
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].email==email1.value || arr[i].phone==phone.value)
            {
                m=true;
                break;

            }
            
        }
    }
 
    if(m)
    {
        register_error.innerText="invalid email or phone"
        register_error.style.visibility="visible";
        console.log("change email");
     
    }
    else
    {
        arr.push(obj);
        let setitem = JSON.stringify(arr);
        localStorage.setItem("data",setitem);
        register_error.innerText="Done"
        register_error.style.visibility="visible";
        alert("Registration success");
        window.location.href = "login.html";
        resetForm();

       
        
    }

}

var profile_pic=document.getElementById("profile_pic");
var profile_name=document.getElementById("profile_name");
var profile_phone=document.getElementById("profile_phone");

function setprofile(pic,name,phone)
{
    profile_pic.setAttribute('src',pic);
    profile_name.innerText=name;
    profile_phone.innerText=phone;
    
}



function login_data(e)
{
    e.preventDefault();
    user_error.style.visibility='hidden';
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
        //console.log("Login Failed");
        user_error.style.visibility='visible';


    }
    else
    {
        arr = getlocal();
        for (let i = 0; i < arr.length; i++) {
            if((arr[i].email==email.value&&arr[i].password==password.value)||(arr[i].phone==email.value&&arr[i].password==password.value))
            {
                //setprofile(arr[i].pic,arr[i].name,arr[i].phone)
                window.location.href = "account.html";
                
                m=true;
                resetForm();
                break;

            }
            
            
        }

        if(!m)
        {
            user_error.style.visibility='visible';
        }
    }
 

}

registerform.addEventListener("submit",validateForm);
loginform.addEventListener("submit",login_data);