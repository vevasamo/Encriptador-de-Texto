const textoIng = document.querySelector(".textoIng");
const textoEnc = document.querySelector(".textoEnc");
const imgsal = document.querySelector(".imgsalida");
let marco = document.getElementsByClassName(".areaencriptada");
const alerta = document.getElementById("alerta");
textoIng.addEventListener("keydown", validaTexto);
/*https://www.linkedin.com/in/vanesamo/*/

function validaTexto(e){
    alerta.textContent ="";
    if (e.key === "á" || e.key === "é" || e.key === "í" || e.key === "ó" || e.key === "ú"
        || e.key === "Á" || e.key === "É" || e.key === "Í" || e.key === "Ó" || e.key === "Ú"
        || e.key === "Dead"){
        e.preventDefault();
        alerta.textContent = "¡¡No debes utilizar tildes!!";
    }
    else {
        if (e.key >="A" && e.key <= "Z") {
            e.preventDefault();
            alerta.textContent = "¡¡No debes utilizar Mayúsculas!!";

        } 
    }
};

/*Llave de encriptación:
["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]
*/

function limpiaEnc(){
    textoEnc.value = "";
    textoEnc.style.backgroundImage = "url('./Imagenes/Secreto.png')";
    document.getElementById('bcopiar').style.display = 'none';
    imgsal.style.backgroundImage = 'none';
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
