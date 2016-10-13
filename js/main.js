    var contenedor = document.getElementById("contenedor");
    var receptor = document.getElementById("receptor");
    var casilla = document.getElementById("casillero");
    var formulario = document.getElementById("formulario");
    var inpuText = document.getElementById("inpuText");
    var boton = document.getElementById("boton");

window.addEventListener("load", function() {

    casilla.addEventListener("click", function() {

        this.style.display = "none";
        formulario.style.display = "block";
        inpuText.focus();
    });

    boton.addEventListener("click", function(event){
        event.preventDefault();
        crearTitulo();
        inpuText.value="";
    });   
});

function crearTitulo(){
    formulario.style.display = "none";

    var bloque = document.createElement("div");
    var tituloLista = document.createElement("span");
    var ancor = document.createElement("a");
    var textAncor = document.createTextNode("Añadir una tarjeta...");

    tituloLista.innerText = inpuText.value;
            
    ancor.setAttribute("href", "#");
    ancor.setAttribute("class","ancor")
    bloque.setAttribute("class", "bloque")
    
    ancor.appendChild(textAncor);
    tituloLista.insertBefore(ancor, tituloLista.children[0]);
    bloque.insertBefore(tituloLista, bloque.children[0]);
    receptor.appendChild(bloque);
    moverForm();
}

function moverForm(){
    var newReceptor = document.createElement("div");

    newReceptor.setAttribute("class","derecha");
    casilla.style.display = "inline";

    contenedor.insertBefore(newReceptor, contenedor.children[1]);
    newReceptor.insertBefore(casilla, newReceptor.children[0]);
    newReceptor.insertBefore(formulario, newReceptor.children[1]);
}

