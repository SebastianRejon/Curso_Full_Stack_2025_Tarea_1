/*Caputro los inputs y eventos de envio*/
const btn = document.getElementById("form_buttom");
btn = addEventListener("click", validate);

function validate() {
  const inputName = document.getElementById("name");
  const inputSurname = document.getElementById("surname");
  const inputEmail = document.getElementById("email");
  const inputBorn = document.getElementById("born");
  
  // obtengo el div oculta de nombre para mostrarlo si existe error
  const messajeError =document.getElementById("alert");
  if (inputName.value===""){
    messajeError.innerText="Debe colocar un nombre!"
  }
}
