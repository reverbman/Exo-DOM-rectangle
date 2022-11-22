/* 1 - VARIABLES */

let rectangle = document.getElementById("rectangle");
let main = document.querySelector("body");
document.body.onload = ('addElement');
btn = document.querySelector('button');
const song = new Audio('assets/js/risitas_laugh.mp3');
let compteur = 0;

/** 2- FONCTIONS */
function addImgSerious() {
    rectangle.classList.add('serious');
    rectangle.classList.remove('smile');
    rectangle.classList.remove('start');
}
function addImgSmile() {
    rectangle.classList.remove('serious');
    rectangle.classList.add('smile');
}
function addImgLaugh() {
    rectangle.classList.add('laugh');
    for (let a = 0; a < 1000; a++) {
        song.play();
    }
    setTimeout(function () {
        location.reload()
    }, 9000);
}

btn.addEventListener('click', function () {
    if(compteur == 0){
        rectangle.classList.toggle('hidden');
        rectangle.classList.remove('displayed');
        compteur += 1;
    }else if(compteur == 1 ){
        rectangle.classList.remove('hidden');
        rectangle.classList.toggle('displayed');
        compteur = 0;
    }
    
});
/** 3- ECOUTEURS */
rectangle.addEventListener("mouseover", addImgSmile);
rectangle.addEventListener("mouseleave", addImgSerious);
rectangle.addEventListener("dblclick", addImgLaugh);


































//  function addElement (){
//     let newImg =document.createElement('img');
//     main.appendChild(newImg);
// }



















// for(let i = 0; i < rectangle.length; i++){rectangle.addEventListener("mouseenter", (event) => {
//     rectangle.innerHTML = '<img src="https://cdn.unitycms.io/images/BnmkYovma0pB_STaH5ibkC.jpg?op=focus&val=1200,1200,1000,1000,0,0,500,500&sum=BDAVfHQMwMs" alt="">'
// });
// rectangle.addEventListener("mouseleave", (event) => {
//     rectangle.innerHTML = '<img src="https://risibank.fr/cache/medias/0/1/136/13606/full.png" alt="">'
// });
// }