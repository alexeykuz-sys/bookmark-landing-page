const hamburgerBtn = document.getElementById("hamburger-icon");
const modal = document.getElementById("modal");
const listBtnsArray = Array.from(document.querySelectorAll(".tab"));
const closeBtn = document.getElementById("modal-close");
const simpleTab = document.getElementById("simple-tab");
const speedyTab = document.getElementById("speedy-tab");
const easyTab = document.getElementById("easy-tab");
const featureRef = document.querySelector(".features");
const featureTab1 = document.getElementById("feature-1");
const featureTab2 = document.getElementById("feature-2");
const featureTab3 = document.getElementById("feature-3");
const tabWrapper = document.querySelector(".tab-wrapper");

function hamburgerHandler() {
  modal.classList.add("show");
}
hamburgerBtn.addEventListener("click", hamburgerHandler);

function modalClose() {
  modal.classList.remove("show");
}

closeBtn.addEventListener("click", modalClose);

    
const toggleElem1 = () => {
    if(document.getElementById('simple-tab').style.display = 'none'){
        document.getElementById('simple-tab').style.display = 'flex'
        document.getElementById('speedy-tab').style.display = 'none'
        document.getElementById('easy-tab').style.display = 'none'
        
    } 
    
}

const toggleElem2 = () => {
    if(document.getElementById('speedy-tab').style.display = 'none'){
    document.getElementById('speedy-tab').style.display = 'flex'
    document.getElementById('simple-tab').style.display = 'none'
    document.getElementById('easy-tab').style.display = 'none'
} 
}

const toggleElem3 = () => {
    if(document.getElementById('easy-tab').style.display = 'none'){
    document.getElementById('easy-tab').style.display = 'flex'
    document.getElementById('speedy-tab').style.display = 'none'
    document.getElementById('simple-tab').style.display = 'none'
    }
}