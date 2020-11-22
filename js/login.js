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



// function resetForm() {
//     if(valid)
//     {
//         id.value = "";
//          name1.value = "";
//          email.value = "";
//          phone.value = "";
//          age.value = "";
//          msg.textContent = "";

        
//     }
//  }
 




//  var arr =[];    /////// array to push objects


// ////////////// function set data to local sorage first time
// function register() {
//     let obj = {
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         phone:document.getElementById("phone").value,
//         age:document.getElementById("age").value,
//         gender:document.getElementById("id").value
//     }
//     //arr.push(obj);

    

//     let setitem = JSON.stringify(arr);
//     localStorage.setItem("data",setitem);


    
// }


// function getlocal() {
//     let result = JSON.parse(localStorage.getItem("data"));
//     return result;
    
// }



// function newset()
// {
//     let obj = {
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         phone:document.getElementById("phone").value,
//         age:document.getElementById("age").value,
//         gender:document.getElementById("id").value
//     }
    
//     var m =false;
    
//     if(getlocal()==null)
//     {
//         setlocal();


//     }
//     else
//     {
//         arr = getlocal();
//         for (let i = 0; i < arr.length; i++) {
//             if(arr[i].id==document.getElementById("id").value)
//             {
//                 m=true;
//                 break;

//             }
            
//         }
//     }
 
//     if(m)
//     {
//         id.style.borderColor="red";
//         message1.textContent = "ID Aready Exist ";
//         message1.style.display=style=" contents";
//     }
//     else
//     {
//         arr.push(obj);
//         let setitem = JSON.stringify(arr);
//         localStorage.setItem("data",setitem);
//         msg.textContent = "Added Succssefully";
        
//     }

// }