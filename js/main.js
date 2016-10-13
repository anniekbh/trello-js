window.addEventListener("load", function() {

    var contenedor = document.getElementById("contenedor");
    var receptor = document.getElementById("receptor");
    var casilla = document.getElementById("casillero");
    var formulario = document.getElementById("formulario");

    casilla.addEventListener("click", function() {
        this.style.display = "none";
        formulario.style.display = "block";
    });
    
});