/*Caputro los inputs y eventos de envio*/
let btn = document.getElementById("form_buttom").addEventListener("click", validate);

function validate() {
  let inputName = document.getElementById("name");
  let inputSurname = document.getElementById("surname");
  let inputEmail = document.getElementById("mail");
  let inputBorn = document.getElementById("born");
  
  /*
  Esta tecnica la uso para cada elemento que pueda:
  1. obtengo el div oculta de nombre para mostrarlo si existe error
  2. limpio el contenido de mensajes de error
  4. creo un parrafo para notificar error
  5. evluo con if el tipo de error
  */
  let messajeErrorNmae =document.getElementById("alertName");
  messajeErrorNmae.innerHTML="";
  itemName=document.createElement("p");

  if (inputName.value===""){
    itemName.textContent="Debe colocar un Nombre de pila.";  
    messajeErrorNmae.appendChild(itemName);    
  }
  if (inputName.value.length<3){
    itemName.textContent="El nombre debe tener al menos 3 caracteres.";  
    messajeErrorNmae.appendChild(itemName);    
  }
  if (Number(inputName.value)){
    itemName.textContent="El nombre no debe contener digitos numéricos.";  
    messajeErrorNmae.appendChild(itemName);    
  }  
  //
  let messajeErrorSurname =document.getElementById("alertSurname");
  messajeErrorSurname.innerHTML="";
  itemSurname=document.createElement("p");

  if (inputSurname.value===""){
    itemSurname.textContent="Debe colocar un Apellido. No puede estar vacio.";  
    messajeErrorSurname.appendChild(itemSurname); 

  }
  if (inputSurname.value.length<3){
    itemSurname.textContent="El apellido debe tener al menos 3 caracteres.";  
    messajeErrorSurname.appendChild(itemSurname);   
  }
  if (Number(inputSurname.value)){
    itemSurname.textContent="El apellido no debe contener digitos numéricos.";  
    messajeErrorSurname.appendChild(itemSurname); 
  }  
  // 
  let messajeErrorMail =document.getElementById("alertMail");
  messajeErrorMail.innerHTML="";
  itemMail=document.createElement("p");

  console.log(inputEmail.value);
  if (inputEmail.value===""){
    
    itemMail.textContent="Debe colocar un correo electronico.";  
    messajeErrorMail.appendChild(itemMail); 
  }
  // let exp=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  // if (exp.test(inputEmail.value)){
  //   itemMail.textContent="Formato incorrecto de correo electronico.";  
  //   messajeErrorMail.appendChild(itemMail); 
  // } 
  
}
