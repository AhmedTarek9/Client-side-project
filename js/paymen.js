// document.getElementById("payments-1").onclick=function(){
//     form1.style="display: none;"
//     form2.style="display: block;"
// };
// document.getElementById("payments-2").onclick=function(){
//     form2.style="display: none;"
//     form1.style="display: block;"
// };
// const form1 = document.getElementById("checkout-form1");
// const form2 = document.getElementById("checkout-form2");

// method2.addEventListener('click', function(){
//     form1.style="display: block;"
//     form2.style="display: none;"
// })

// method1.addEventListener('click', function(){
//     form1.style="display: none;"
//     form2.style="display: block;"
// })


// document.getElementById("payment-1").onclick=function(){
//     getElementById("checkout-form1").style="display: none;"
//     getElementById("checkout-form2").style="display: block;"
// };
// document.getElementById("payment-1").onclick=function(){
//   getElementById("checkout-form2").style="display: none;"
//   getElementById("checkout-form1").style="display: block;"
// });



// function hideA(x){
//     document.getElementById("checkout-form1").style.display = "none";
//     document.getElementById("checkout-form2").style.display = "block";
// }


// function hideB(x){
//     document.getElementById("checkout-form1").style.display = "block";
//     document.getElementById("checkout-form2").style.display = "none";
// }
document.getElementById("payments-1").onchange = function(){
    document.getElementById("checkout-form2").style.display="none";
    document.getElementById("checkout-form1").style.display="block";
};
document.getElementById("payments-2").onchange = function(){
  document.getElementById("checkout-form2").style.display="block";
  document.getElementById("checkout-form1").style.display="none";
};



