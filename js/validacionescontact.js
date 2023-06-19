var form = document.querySelector("#formContactanos");

document.Contactanos.addEventListener('submit', validar2);

function validar2(event) {
    var resultado = true;
    // obtener los elementos a validar
    var txtNombres = document.getElementById("nombreapellidos");//document.querySelector("#nombres"); // reotrna el primer input que tenga name ='nombres'
    //var txtNombres = document.Contactanos.nombreapellidos;
    var txtTelefono = document.getElementsByName("telefono");
    var radiosGenero = document.getElementsByName("producto");
    var txtemail = document.getElementById("correo");

    //var chsuscrip = document.getElementById("suscripcion");
    // expresiones regulares (RegEx)
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var numeroreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
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

    //validacion para telefono
    if (txtTelefono.value === '') {
        resultado = false;
        mensaje("Debe llenar este campo", txtTelefono);

    } else if (txtTelefono.value.length > 10) {
        resultado = false;
        mensaje("Solo se permite ingresar hasta 10 caracteres", txtTelefono);
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
    /*let sel = false;
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
    }*/

    //validacion suscripcion
    /*if(!chsuscrip.checked){
        resultado = false;
        mensaje("Debe aceptar los términos")
    }*/

}
function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);
    event.preventDefault();
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}


