 /*=================================video==================================================*/

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++
    if(counter > 4){
        counter = 1;
    }
},5000);

const navbarToggle = document.querySelector('#menu-icon');
const navbarMenu = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

