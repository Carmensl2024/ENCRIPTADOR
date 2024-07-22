function encriptar() {
    var textoOriginal = document.getElementById("encriptador").value.toLowerCase();
    if (!textoOriginal.trim()) {
        document.getElementById("titulo_area2").innerText = "NINGÚN MENSAJE FUÉ ENCONTRADO";
        return;
    }
    var textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("desencriptador").value = textoEncriptado;
    document.getElementById("titulo_area2").innerText = "TEXTO ENCRIPTADO CON EXITO";
}

function desencriptar() {
    var textoEncriptado = document.getElementById("encriptador").value.toLowerCase();
    if (!textoEncriptado.trim()) {
        document.getElementById("titulo_area2").innerText = "NINGÚN MENSAJE FUÉ ENCONTRADO";
        return;
    }
    var textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("desencriptador").value = textoOriginal;
    document.getElementById("titulo_area2").innerText = "TEXTO DESENCRIPTADO CON EXITO";
}

function copiar() {
    const textarea = document.getElementById('desencriptador');
    const texto = textarea.value;

    if (!texto.trim()) {
        document.getElementById('titulo_area2').innerText = 'NINGÚN MENSAJE FUÉ ENCONTRADO';
        return;
    }

    navigator.clipboard.writeText(texto).then(() => {
        
        textarea.value = '';
        document.getElementById('titulo_area2').innerText = 'NINGÚN MENSAJE FUÉ ENCONTRADO';
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

