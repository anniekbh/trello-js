window.addEventListener("load", function() {

    var contenedor = document.getElementById("contenedor");
    var receptor = document.getElementById("receptor");
    var casilla = document.getElementById("casillero");
    var formulario = document.getElementById("formulario");
    var inpuText = document.getElementById("inpuText");
    var boton = document.getElementById("boton");

    casilla.addEventListener("click", function() {
        //event.preventDefault();

        this.style.display = "none";
        formulario.style.display = "block";
        inpuText.focus();

        });

     boton.addEventListener("click", function(event){
        event.preventDefault();
        crearTitulo();
        this.parentElement.remove();
     });
    
    
});

function crearTitulo(){
            formulario.style.display = "none";

            var tituloLista = document.createElement("span");
            var ancor = document.createElement("a");
            var textAncor = document.createTextNode("Añadir una tarjeta...");

            tituloLista.innerText = inpuText.value;
            
            ancor.setAttribute("href", "#");
            ancor.setAttribute("class","ancor")

            tituloLista.insertBefore(ancor, tituloLista.children[0]);
            ancor.appendChild(textAncor);
            receptor.appendChild(tituloLista);        
}
