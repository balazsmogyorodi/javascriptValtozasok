window.addEventListener("load", init);



function init() {
    console.log("Hello világ");
    const articleElem = document.querySelectorAll("article");
    articleElem[0].innerHTML="<button id> Katt ide!</button>";
    const gomb = document.querySelector("article button");
    gomb.addEventListener('click', function(){
        console.log("Kattintás");
    });
    
    articleElem[0].innerHTML+="<div><img src='OIP.jpg' alt='kepem'> <div/>";
    const kep = document.querySelector("article div");
    kep.addEventListener('mouseenter',function() {
        console.log("Fölé vittem az egeret!");
        kep.getElementsByClassName.border="2px solid red";
    });
     kep.addEventListener('mouseout',function() {
        console.log("Mincs ott az egeret!");
        kep.getElementsByClassName.border="0px solid red";
    });





}


