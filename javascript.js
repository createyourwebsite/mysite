let photo = document.querySelectorAll(".sitephoto");
let span = document.querySelectorAll('span');


for(let i in photo, span) {
photo[i].onmouseover = () => {     
     photo[i].style.width = '70%';     
     photo[i].style.height = '70%';
     photo[i].style.borderRadius = '0px';
     span[i].style.display= 'contents';

    }  }
    
for(let i in photo, span) {    
photo[i].onmouseout = () => {      
    photo[i].style.width = '';     
    photo[i].style.height = '';
    photo[i].style.borderRadius = '50px';
    span[i].style.display= 'none';
}}

let logo1 = document.querySelector(".logo1");
let logo2 = document.querySelector(".logo2");
let logo3 = document.querySelector('.logo3')

logo1.onmouseover = () => {

    logo1.style.width = "150px";
    logo2.style.opacity = '0.5';
    logo3.style.opacity = '0.5';

}

logo1.onmouseout = () => {
    logo1.style.width = "";
    logo2.style.opacity = '';
    logo3.style.opacity = '';

}

logo2.onmouseover = () => {
    logo2.style.width = "150px";
    logo1.style.opacity = '0.5';
    logo3.style.opacity = '0.5';

}

logo2.onmouseout = () => {
    logo2.style.width = "";
    logo1.style.opacity = '';
    logo3.style.opacity = '';

}

logo3.onmouseover = () => {
    logo3.style.width = "150px";
    logo1.style.opacity = '0.5';
    logo2.style.opacity = '0.5';

}

logo3.onmouseout = () => {
    logo3.style.width = "";
    logo1.style.opacity = '';
    logo2.style.opacity = '';

}

let numero = document.querySelector('.num');

numero.onmouseover = () => {
    numero.style.fontSize = '80px';


}

numero.onmouseout = () => {
    
    numero.style.fontSize = '';

}

let drapeau = document.querySelectorAll(".drapeau1");


