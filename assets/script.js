const hamburgerBtn = document.getElementById('hamburger-icon');
const modal = document.getElementById('modal');
const listBtnsArray = Array.from(document.querySelectorAll('.feature-tab'))
const closeBtn = document.getElementById('modal-close');
const simpleTab=document.getElementById('simple-tab');
const speedyTab=document.getElementById('speedy-tab');
const easyTab=document.getElementById('easy-tab');
const featureTab = document.querySelector('.features');
const featureTab1 = document.getElementById('feature-1');
const featureTab2 = document.getElementById('feature-2');
const featureTab3 = document.getElementById('feature-3');
const tabWrapper = document.querySelector('.tab-wrapper')

function hamburgerHandler() {
    modal.classList.add('show');
}
hamburgerBtn.addEventListener('click', hamburgerHandler);

function modalClose() {
    modal.classList.remove('show');
}

closeBtn.addEventListener('click', modalClose);

let featuresTabArray = Array.from(featureTab.children)

console.log(featuresTabArray)

featuresTabArray.forEach(feature=>{
    listBtnsArray.forEach(btn => btn.addEventListener('click', (e) =>{
        
    
        

    }))

    
    //     console.log(featureTab.className)
    //     if(e.target.className === featureTab.className){
    //         featureTab.classList.add('show')
    //     } else if (!e){
    //         featureTab.remove('show')
    //     }
     
});