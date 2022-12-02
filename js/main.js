// validación del menú

const nav__button = document.querySelector('.nav__button');
const subContainer = document.querySelector('.subContainer__nav');
const ContainerLogin = document.querySelector('.container__login');

nav__button.addEventListener('click', ()=> {
    subContainer.classList.toggle('activado'); 
})

nav__button.addEventListener('click', ()=> {
    ContainerLogin.classList.toggle('activado'); 
})

// validación del formulairo
const entrada = document.getElementById('entrada')
const error = document.getElementById('error')
function enviarFormulario() {
   let mesajeError = [];
   if (entrada.value === '' || entrada.value === '') {
    mesajeError.push('Llene el campo')
   }
   error.innerHTML = mesajeError.join('');
   return false;
   
}

