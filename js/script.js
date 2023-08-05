 /*=================================video==================================================*/

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++
    if(counter > 4){
        counter = 1;
    }
},5000);

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
/*
const navbarToggle = document.querySelector('#menu-icon');
const navbarMenu = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
*/
