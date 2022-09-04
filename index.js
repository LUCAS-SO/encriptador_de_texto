// Reemplazo de vocales
// a = ai
// e = enter
// i = imes
// o = ober
// u = ufat

// funcion para encriptar

function encrypt() {
    // tomo el valor del texto escrito
    var text = document.getElementById("text").value;
    // expresion regular para los ascentos
    var expReg = /[áéíóú]/gm;

    // valido que el texto este en minusculas y sin ascentos
    if ((text == text.toLowerCase()) && (expReg.test(text) == false)){
            
        // reemplazo las vocales con el metodo .replace + midificadores por las vocales cifradas
        var textEncrypt = text.replace(/e/gm,"enter");
        var textEncrypt = textEncrypt.replace(/o/gm,"ober");
        var textEncrypt = textEncrypt.replace(/i/gm,"imes");
        var textEncrypt = textEncrypt.replace(/a/mg,"ai");
        var textEncrypt = textEncrypt.replace(/u/gm,"ufat");

        // oculto el 1er contenedor y muestro el 2do
        document.getElementById("container-decrypt").style.display = "none";
        document.getElementById("container-decrypted").style.display = "inline-block";
        
        // inserto el texto desifrado en el <p> asignado
        document.getElementById("t-copied").innerHTML = textEncrypt;
    }
    else {
        // Alerta recordatorio (a mejorar esta comunicacion con posible modal...) 
        alert ("Recuerde solo letras minúsculas y sin ascentos");
    }
}

document.getElementById("b-encrypt").onclick = function(){
    encrypt();
}

// funcion para desencriptar

function decrypt(){
    var text = document.getElementById("text").value.toLowerCase();

    var textDecrypt = text.replace(/enter/gm,"e");
    var textDecrypt = textDecrypt.replace(/ober/gm,"o");
    var textDecrypt = textDecrypt.replace(/imes/gm,"i");
    var textDecrypt = textDecrypt.replace(/ai/gm,"a");
    var textDecrypt = textDecrypt.replace(/ufat/gm,"u");

    document.getElementById("container-decrypt").style.display = "none";
    document.getElementById("container-decrypted").style.display = "inline-block";
    
    document.getElementById("t-copied").innerHTML = textDecrypt;
}

document.getElementById("b-decrypt").onclick = function(){
    decrypt();
}

// funcion para el boton copiar

// tomo el contenido a copiar
const eCopy = document.querySelector(".container-copy")

function copy(element){
    // creo un input externo
    const inputO = document.createElement("input");
    // se le da valor
    inputO.setAttribute("value", element.innerText);
    // lo agrego al documento por medio del appendChild
    document.body.appendChild(inputO);
    // se toma el contenido
    inputO.select();
    // y se copia
    document.execCommand("copy");
    // quito el Child con remove
    document.body.removeChild(inputO);
}

// button alert (igual a mejorar...)

function copyAlert(){
    alert ("¡Mensaje copiado!");
}

// copio y activo el button alert de copiado
document.querySelector("#b-copy").addEventListener("click", ()=>{
    copy(eCopy);
    copyAlert();
})