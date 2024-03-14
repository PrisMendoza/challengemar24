const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const matriz_code = [    
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
    setTimeout(changeBackground,0,'encriptado');
    setTimeout(changeBackground,5 * 1000,'');
}

function changeBackground(className){
    document.body.classList = [className];
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1])

        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;  
    setTimeout(changeBackground,0,'desencriptado');
    setTimeout(changeBackground,5 * 1000,'');  
}

function desencriptar(fraseEncriptada) {

    for (let imes = matriz_code.length - 1; imes >= 0; imes--) {
        if(fraseEncriptada.includes(matriz_code[imes][1])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
            matriz_code[imes][1],
            matriz_code[imes][0]                                                            
        )
        console.log(fraseEncriptada);
    }
    }
    return fraseEncriptada;
}

function btnCopiar(){
    var value=document.getElementById("campo-mensaje").value;
    console.log(value)
    navigator.clipboard.writeText(value);
}

