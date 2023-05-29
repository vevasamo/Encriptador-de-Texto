const textoIng = document.querySelector(".textoIng");
const textoEnc = document.querySelector(".textoEnc");
const imgsal = document.querySelector(".imgsalida");
let marco = document.getElementsByClassName(".areaencriptada");
textoIng.addEventListener("keydown", function validaTexto(Event){
    /*  if (event.ctrlKey && event.key === "c") { */
    let l = Event.keyCode;
    let pos = textoIng.length;
    if ((l >= 97 && l <= 122) || (l == 32)){
        textoIng.value[pos] = textoIng.value[pos];
    }
    else {
        if (l >= 65 && l <= 90) {
            textoIng.value[pos] = textoIng.value[pos] + 32;
        }
        else{
            textoIng.value[pos] ="";
        }
    }
});

/*Llave de encriptación:
["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]
*/

function limpiaEnc(){
    textoEnc.value = "";
    textoEnc.style.backgroundImage = "url('./Imagenes/Secreto.png')";
    document.getElementById('bcopiar').style.display = 'none';
    imgsal.style.backgroundImage = 'none';
}


function validaTexto2(e){
    /* onkeypress="return ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))"
    
   letra = e.which;
   letra = String.fromCharCode(key);*/
   letra = e.keyCode;
   if ((letra >= 97 && letra <= 122) || (letra == 32)){
    return letra;
   }
   else {
    if (letra >= 65 && letra <= 90) {
        return letra + 32;
    }
    else{
        return;
    }
   }
}

function btnEncriptar(){
    textoEnc.value = encriptar(textoIng.value);
    textoIng.value = "";
}

function muestraCopiar(rutaimg){
    textoEnc.style.backgroundImage = "none";
    imgsal.style.backgroundImage = rutaimg;
    document.getElementById('bcopiar').style.display = 'inline';
}
function escondeCopiar(){
    document.getElementById('bcopiar').style.display = 'none';
    imgsal.style.backgroundImage = "none";
}
function encriptar(fraseEnc){

    let llaveEnc = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(llaveEnc);
    if (fraseEnc.length>0){
        fraseEnc = fraseEnc.toLowerCase();
        for(let i = 0; i < llaveEnc.length; i++){
            if (fraseEnc.includes(llaveEnc[i][0])){
                fraseEnc = fraseEnc.replaceAll(llaveEnc[i][0], llaveEnc[i][1]);
            }
        }   
        muestraCopiar("url('./Imagenes/Silencio.png')");
    }
    else{
        escondeCopiar();
        alert("No se digitó ningún texto para encriptar");
    }
    return fraseEnc;
}

function btnDesencriptar(){
    textoEnc.value = desencriptar(textoIng.value);
    textoIng.value = "";
}

function desencriptar(fraseDes){
    if (fraseDes.length>0){
        let llaveEnc = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
        fraseDes = fraseDes.toLowerCase();
        for(let i = 0; i < llaveEnc.length; i++){
            if (fraseDes.includes(llaveEnc[i][1])){
                fraseDes = fraseDes.replaceAll(llaveEnc[i][1], llaveEnc[i][0]);
            }
        }
        muestraCopiar("url('./Imagenes/Banderines.png')");

    }
    else{
        escondeCopiar();
        alert("No se digitó ningún texto para desencriptar");
    }
    return fraseDes;
}
function btnCopiarT(){
    navigator.clipboard.writeText(textoEnc.value);
    textoEnc.select();
    escondeCopiar();
}
