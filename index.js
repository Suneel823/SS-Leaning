// Highletfor Nav headings

$('#menu-btn').click(function(){
    $('.navigation ul').addClass('active')
})

$('#menu-close').click(function(){
    $('.navigation ul').removeClass('active')
})



// VALIDATION



// // --PROMPT SIGN UP FORM--


var loginpage=document.getElementsByClassName("blue");
loginpage[0].addEventListener("click",function(){

    setTimeout(() => {
        signup_box.classList.add("signup_box_active");
        box.classList.add("active");
    }, 100);
})



let slider_button = document.querySelector(".slider_button");
let signup_button = document.querySelector(".signup_button");
let login_button = document.querySelector(".login_button");
let form_slider = document.querySelector(".form_slider");

let signup_box = document.querySelector(".signup_box");
let box = document.querySelector(".box");
let close_button = document.querySelector(".close_button");

// window.onload = function(){

//     setTimeout(() => {
//         signup_box.classList.add("signup_box_active");
//         box.classList.add("active");
//     }, 3000);
// }
close_button.onclick = function(){
    signup_box.classList.remove("signup_box_active");
    box.classList.remove("active");
}

signup_button.style.color = "#fff";

login_button.onclick = function () {
    slider_button.style.left = "50%";
    login_button.style.color = "#fff";
    signup_button.style.color = "#000";
    form_slider.style.left = "-100%";
}
signup_button.onclick = function () {
    slider_button.style.left = "0%";
    signup_button.style.color = "#fff";
    login_button.style.color = "#000";
    form_slider.style.left = "0%";

}

var signup=document.getElementsByClassName("form_slider");
var login=document.getElementsByClassName("login_form");


// FORM VALIDATION



// SIGNUP VALIDATION

var f=document.forms;

var arr=[];

f[0].addEventListener("submit",function(e){
    e.preventDefault();
    obj={
        username:e.target[0].value,
        email:e.target[1].value,
        password:e.target[2].value,
        cpassword:e.target[3].value,
    }
// console.log(obj);
if(obj.username.length==0 && obj.email.length==0 && obj.password.length==0 && obj.cpassword.length==0){
   
    alert("Please fill the details");
}
else{
    arr.push(obj);
    window.localStorage.setItem("users",JSON.stringify(arr));
    alert("Succussesfully Registered Please LOG IN");
}


e.target[0].value="";
e.target[1].value="";
e.target[2].value="";
e.target[3].value="";

});



// LOG IN VALIDATION

var a=window.localStorage.getItem("users");
var userdata=JSON.parse(a);

var arr1=[]

f[1].addEventListener("submit",(ee)=>{
ee.preventDefault();
var objec={
    usermail:ee.target[0].value,
    userpass:ee.target[1].value,
}
if(objec.usermail==obj.email && objec.userpass==obj.password){

    window.location.assign("./main.html");
}
else{
    alert("User details not matched")
}

ee.target[0].value="";
ee.target[1].value="";



})



// ---LOG IN ALERT--->
var ale=document.getElementsByClassName("navigationss");
ale[0].addEventListener("click",()=>{
 alert("please log in")
})


// SUBSCRIBED ALERT

var s=document.getElementById("subscribed");
s.addEventListener("click",()=>{
    alert("Thank you for Subscribed")
})



