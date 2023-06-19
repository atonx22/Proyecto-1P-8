
//obtengo el primer elemento siempre y cuando coincida con el que se solicita
var form = document.querySelector("#formRegistro");

const imgconbox = document.getElementById("imgconbox");
imgCo = document.getElementById("imgCo");

document.formRegistro.addEventListener('submit', validar);

function validar(event) {
    var resultado = true;
    // obtener los elementos a validar
    //var txtNombres = document.getElementById("nombres");//document.querySelector("#nombres"); // reotrna el primer input que tenga name ='nombres'
    var txtNombres = document.formRegistro.nombres;
    var txtApellidos = document.getElementById("apellidos");
    var txtUsuario = document.getElementById("usuario");
    var radiosGenero = document.getElementsByName("genero");
    var txtcontraseña = document.getElementById('contraseña');
    // document.querySelectorAll("input[name='genero']");
    // si lo encuentra retorna un arreglo de radios

    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo");

    //var chsuscrip = document.getElementById("suscripcion");
    // expresiones regulares (RegEx)
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var numeroreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var contraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
     limpiarMensajes();

    //validacion para nombres
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombres);

    } else if (!letra.test(txtNombres.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        resultado = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }

    //validacion contra
    if(txtcontraseña.value === '') {
        resultado = false;
        mensaje("Debe ingresar una contraseña", txtcontraseña);
    } else if(!contraseña.test(txtcontraseña.value)){
        resultado = false;
        mensaje("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula, puede tener otros símbolos", txtcontraseña);
    }

    //VALIDACION PARA APELLIDOS
    if (txtApellidos.value === '') {
        resultado = false;
        mensaje("Apellido es requerido", txtApellidos);

    } else if (!letra.test(txtApellidos.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtApellidos.value.length > 20) {
        resultado = false;
        mensaje("Solo se permite ingresar hasta 20 caracteres", txtApellidos);
    }

    //validacion para usuario
    if (txtUsuario.value === '') {
        resultado = false;
        mensaje("Debe llenar este campo", txtUsuario);

    } else if (txtUsuario.value.length > 10) {
        resultado = false;
        mensaje("Solo se permite ingresar hasta 10 caracteres", txtUsuario);
    }


    //validacion email
    if (txtemail.value === "") {
        resultado = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("Email no es correcto", txtemail);
    }

    //validacion radio button
    let sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            if (radiosGenero[i].value === "F") {

            }
            sel = true;
            let res = radiosGenero[i].value;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar un genero", radiosGenero[0]);
    }

    //validacion suscripcion
    /*if(!chsuscrip.checked){
        resultado = false;
        mensaje("Debe aceptar los términos")
    }*/


    // validacion de fecha
    var dato = txtfecha.value;
    var fechaN = new Date(dato);// convertir a fecha
    var anioN = fechaN.getFullYear();

    var fechaActual = new Date();// fecha actual
    var anioA = fechaActual.getFullYear();
    if (fechaN > fechaActual) {
        resultado = false;
        mensaje("Fecha no puede ser superior a la actual", txtfecha);
    } else if (anioN < 1930) {
        resultado = false;
        mensaje("Anio de nacimiento no puede ser menor a 1930", txtfecha);
    } else if ((anioA - anioN) < 18) {
        resultado = false;
        mensaje("debe ser mayor de 18 años", txtfecha);
    }

    if (!resultado) {
        event.preventDefault();  // detener el evento  //stop form from submitting
    }
}
function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}



function openFulImg(elemento){
    imgconbox.style.display = "flex";
    imgCo.src =elemento;
}

function closeImg(){
    imgconbox.style.display = "none";
}

