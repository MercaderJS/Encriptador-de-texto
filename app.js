
function ocultarTextoCopiar() {  //oculta el texto encriptado/desencriptado y el boton de copiar
   document.getElementById('textoSalida').style.display = 'none';
   document.getElementById('copiar').style.display = 'none';

}

function mostrarTextoCopiar() {  //oculta la imagen y el texto por defecto
    document.getElementById('textoSalida').style.display = 'block';
    document.getElementById('copiar').style.display = 'block';
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('mensaje1').style.display = 'none';
    document.getElementById('mensaje2').style.display = 'none';

}

function encriptar(){  //encripta el texto del textarea del area de escritura y hace 
                       //que se detenga la ejecucion si hay algun caracter o no permitido en el textarea
 
    let entradaTexto = document.getElementById('cajaTexto').value;
    let salida = document.getElementById('textoSalida');
    let error = caracterNoPermitido(entradaTexto);
    let nuevoTexto = salida.innerHTML = cambiarVocal(entradaTexto);
    ocultarTextoCopiar();
   
    if (error || entradaTexto === '') {
        ocultarTextoCopiar();
        return;
        
    } else if (salida.innerHTML = cambiarVocal(entradaTexto)) {
        nuevoTexto;
        mostrarTextoCopiar();
    }
    
  
}

function cambiarVocal(a) { 

    //añade marcadores a cada vocal para solo cambiar las vocales del texto original y no las reciengeneradas
   a = a.replace(/a/g,'#1#').replace(/e/g,'#2#').replace(/i/g,'#3#')
        .replace(/o/g,'#4#').replace(/u/g,'#5#');

         return a = a.replace(/#1#/g,'ai').replace(/#2#/g,'enter').replace(/#3#/g,'imes')
        .replace(/#4#/g,'ober').replace(/#5#/g,'ufat');

    
    
}


//cambia la alerta y color indicando al usuario si coloco un caracter no permitido
function caracterNoPermitido(a)  {
    let mayusculas = /[A-Z]/g.test(a);
    let acentos = /[áéíóúÁÉÍÓÚñÑ]/g.test(a);
    let caracterEspecial = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿]/g.test(a);
    let textoVacio = / /.test(a);// reparar busqueda en string para caracter vacío en proxima actualizacion.
    
    if (mayusculas) {

        let alertaMayuscula = document.getElementById('alerta');
        alertaMayuscula.style.color = 'red';
        return alertaMayuscula.innerHTML = 'No se aceptan letras mayúsculas';
    

    } else if (acentos) {

        let alertaAcentos = document.getElementById('alerta');
        alertaAcentos.style.color = 'red';
        return alertaAcentos.innerHTML = 'No se aceptan letras con acento';

    } else if(caracterEspecial) {
        
        let alertaCharEspecial = document.getElementById('alerta');
        alertaCharEspecial.style.color = 'red';
        return alertaCharEspecial.innerHTML = ('No se aceptan caracteres especiales');

    }/* else if (textoVacio) { 

        
        let alertaTextoVacio = document.getElementById('alerta');
        alertaTextoVacio.style.color = 'red';
        return alertaTextoVacio.innerHTML = ('No se encontró ningún texto');

    }*/



}                       

function desencriptar() { //toma el texto que se introdujo y lo coloca en el area de salida listo para copiar
    let entradaTexto = document.getElementById('cajaTexto').value;
    let textoparaCopiar = document.getElementById('textoSalida');
    let error = caracterNoPermitido(entradaTexto);
    

    if (entradaTexto === '') {
        return;
    } else if (error) {
        return error;
    } 

    textoparaCopiar.innerHTML = entradaTexto;
}

function copiar() {// toma el texto de la salida 
    let salidaTexto = document.getElementById('textoSalida').value;
    navigator.clipboard.readText(salidaTexto);
    navigator.clipboard.writeText(salidaTexto);
    
}

copiar();

desencriptar();

encriptar();
