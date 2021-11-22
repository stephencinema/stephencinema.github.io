const theButton = document.getElementById("firstButton");
let theHeader = document.querySelector("header");
let theBody = document.querySelector("body");
let theMain = document.querySelector("main");

theButton.addEventListener('click', makeDo);

function makeDo(){
    theHeader.style.color = "blue";
    theBody.style.backgroundColor = "white";
    theMain.style.color = "blue";

    theHeader.style.transition = "all 5s";
    theBody.style.transition = "all 5s";
    theMain.style.transition = "all 5s";
}

