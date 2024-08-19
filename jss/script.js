const IT = document.getElementById("IT");
const Ben = document.getElementById("Ben");
const Bdes = document.getElementById("Bdes");
const Bcopiar = document.getElementById("Bcopiar");
const msjfinal = document.getElementById("msjfinal");
const Muñeco = document.getElementById("Muñeco");
const Ii = document.getElementById("Ii");
const iz = document.getElementById("iz");
const nota =   document.querySelector('.nota');




//**La "e" es "enter"
//**La  "i" es  "imes"
//**La "a" es  "ai"
//**La  "o" es  "ober"
//**La  "u" es  "ufat"

let remplazar = [
    ["e", "enter"],
    ["i", "mes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],

]

const reemplazo = (nuevovalor) => {
    msjfinal.innerHTML = nuevovalor;
    Muñeco.classList.add("oculto");
    Ii.value = "none";
    IT.value = "";
    IT.style.height = "auto"
    IT.placeholder = "Ingrese el texto aquí";
    Bcopiar.style.display = "block";
    iz.classList.add("ajustar");
    msjfinal.classList.add("ajustar");
    



}

const reset = () => {
    msjfinal.innerHTML = "";
    IT.value = "";
    IT.style.height = "auto"
    Muñeco.classList.remove("oculto");
    Bcopiar.style.display = "none";
    Ii.value = "block";
    iz.classList.remove("ajustar");
    msjfinal.classList.remove("ajustar");
    IT.focus();

}


Ben.addEventListener("click", () => {
    const texto = IT.value.toLowerCase()
    if (texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            nota.style.display = 'none';
            return newText;
        }
        reemplazo(encriptar(texto));

    } else {
        alert("Ingrese texto para encripatar")
    }


    /* const textoE= encriptar(texto); reemplazada con nuevo valor*/
})

Bdes.addEventListener("click", () => {
    const texto = IT.value.toLowerCase()
    if (texto != "") {
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            nota.style.display = 'none';
            return newText;



        };
        reemplazo(desencriptar(texto));
    } else {
        alert("Ingrese texto para desencripatar")

        /* const textodes= desencriptar (texto); reemplazada con nuevo valor*/


    }



});

Bcopiar.addEventListener("click", () => {
    let texto = msjfinal;
    texto.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    reset();
    nota.style.display = 'block';

});

