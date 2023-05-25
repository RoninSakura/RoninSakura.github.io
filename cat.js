function understand(){
    document.getElementById('ties').scrollIntoView()
}
let check=document.getElementsByClassName("check")[0];
check.onclick=function(){
    location.href="./cat.html";
}
let home=document.getElementsByClassName("home")[0];
home.onclick=function(){
    location.href="./index.html";
}
let more_first=document.getElementsByClassName("more_first")[0];
let information=document.getElementsByClassName("more_information")[0];
more_first.onclick=function(){
    if(information.style.display=="block")
    {
        information.style.display="none";
    }
    else{
        information.style.display="block";
    }
    
}