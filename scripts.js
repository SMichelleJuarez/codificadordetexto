//llama a los eventos que suceden en el documento html
const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const contenedorErrores = document.querySelector(".contenedor-errores");

function validarMensaje () {
    // Borrar errores previos
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        contenedorErrores.removeChild(err);
    }
    //verifica que el mensaje no contenga errores, si encuentra errores lanza el mensaje con el error.
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let novalido = document.createElement("novalido");
            novalido.setAttribute("class", "error");
            novalido.textContent = `La letra ${letra} no es válida, solo se permiten minusculas sin acentos`;
            mensajeError.appendChild(novalido);
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (contenedorErrores.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar (){
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResultado.value = mensaje;
}

function copiar () {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;
