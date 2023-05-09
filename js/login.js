//Ejecutando funciones

document
  .getElementById("iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("registrarse").addEventListener("click", registrarse);
window.addEventListener("resize", tamañoPagina);
document.getElementById("formulario");

//Declarando variables
let formulario_ingreso = document.querySelector(".formulario-ingreso");
let formulario_registro = document.querySelector(".formulario-registro");
let contenedor_ingreso_registro = document.querySelector(
  ".contenedor-ingreso-registro"
);
let caja_posterior_ingreso = document.querySelector(".caja-posterior-ingreso");
let caja_posterior_registro = document.querySelector(
  ".caja-posterior-registro"
);

//FUNCIONES
function iniciarSesion() {
  event.preventDefault();
}

function tamañoPagina() {
  if (window.innerWidth > 850) {
    caja_posterior_registro.style.display = "block";
    caja_posterior_ingreso.style.display = "block";
  } else {
    caja_posterior_registro.style.display = "block";
    caja_posterior_registro.style.opacity = "1";
    caja_posterior_ingreso.style.display = "none";
    formulario_ingreso.style.display = "block";
    contenedor_ingreso_registro.style.left = "0px";
    formulario_registro.style.display = "none";
  }
}

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_ingreso.style.display = "block";
    contenedor_ingreso_registro.style.left = "10px";
    formulario_registro.style.display = "none";
    caja_posterior_registro.style.opacity = "1";
    caja_posterior_ingreso.style.opacity = "0";
  } else {
    formulario_ingreso.style.display = "block";
    contenedor_ingreso_registro.style.left = "0px";
    formulario_registro.style.display = "none";
    caja_posterior_registro.style.display = "block";
    caja_posterior_ingreso.style.display = "none";
  }
}

function registrarse() {
  if (window.innerWidth > 850) {
    formulario_registro.style.display = "block";
    contenedor_ingreso_registro.style.left = "410px";
    formulario_ingreso.style.display = "none";
    caja_posterior_registro.style.opacity = "0";
    caja_posterior_ingreso.style.opacity = "1";
  } else {
    formulario_registro.style.display = "block";
    contenedor_ingreso_registro.style.left = "0px";
    formulario_ingreso.style.display = "none";
    caja_posterior_registro.style.display = "none";
    caja_posterior_ingreso.style.display = "block";
    caja_posterior_ingreso.style.opacity = "1";
  }
}
function validarContrasena(contrasena) {
  // Validar que tenga al menos 8 caracteres
  if (contrasena.length < 8) {
    return false;
  }

  // Validar que tenga al menos una letra mayúscula
  if (!/[A-Z]/.test(contrasena)) {
    return false;
  }

  // Validar que tenga al menos un número
  if (!/\d/.test(contrasena)) {
    return false;
  }

  return true;
}

function registerData() {
  console.log(document.getElementById("regisName").value);
  
  // Validar la contraseña ingresada
  let contrasena = document.getElementById("regisPssw").value;
  if (!validarContrasena(contrasena)) {
    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
    return;
  }
  
  let userToSave = {
    name: document.getElementById("regisName").value,
    mail: document.getElementById("regisMail").value,
    pssw: contrasena,
  };
  let jsonUser = JSON.stringify(userToSave);
  localStorage.setItem("user", jsonUser);
  console.log("this is  a test");
}


function login() {
  event.preventDefault();
  
  let storeUser = JSON.parse(localStorage.getItem("user"));
  console.log(document.getElementById("loginMail").value);
  console.log(storeUser.mail);
  if (document.getElementById("loginMail").value == storeUser.mail) {
    if (document.getElementById("loginPssw").value == storeUser.pssw) {
      window.location.href = "cifrado.html";
    } else {
        fallos = fallos + 1;
        console.log('fallos', fallos);
        if (fallos >= 3) {
          alert("Número límite (3)");
          correoInput.disabled = true;
          psswInput.disabled = true;
        } else {
          alert("Contraseña incorrecta");
        }
    }
  } else {
    alert("Usuario incorrecto");
  }
}