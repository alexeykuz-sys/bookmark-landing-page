const hamburgerBtn = document.getElementById("hamburger-icon");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close");


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

var emailField = document.getElementById("exampleInputEmail");
var button = document.getElementById("contact-btn");
var response = document.getElementById("response");

button.addEventListener("click", function () {
  var email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = "";
  } else {
    response.innerHTML = "Whoops, make sure it's an email";
    response.classList.toggle('show');
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}