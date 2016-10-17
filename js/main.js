var contenedor = document.getElementById("contenedor");
var receptor = document.getElementById("receptor");
var casilla = document.getElementById("casillero");
var formulario = document.getElementById("formulario");
var inpuText = document.getElementById("inpuText");
var boton = document.getElementById("boton");

window.addEventListener("load", function() {

    casilla.addEventListener("click", function(event) {
        event.preventDefault();
        this.style.display = "none";
        formulario.style.display = "inline-block";
        inpuText.focus();
    });

    boton.addEventListener("click", function(event) {
        event.preventDefault();
        crearTitulo();
        inpuText.value="";
        moverForm();
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
    tituloLista.setAttribute("class", "tituloLista");
    
    ancor.appendChild(textAncor);
    bloque.insertBefore(tituloLista, bloque.children[0]);
    bloque.insertBefore(ancor, bloque.children[1]);
    receptor.appendChild(bloque);
    
    ancor.addEventListener("click", function(event) {
        event.preventDefault();
        crearTarjeta();

        function crearTarjeta(){
        ancor.style.display = "none";
        
        var tarjeta = document.createElement("form");
        var tituloTarjeta = document.createElement("textarea");
        var botoNuevo = document.createElement("input");

        botoNuevo.setAttribute("type", "submit");
        botoNuevo.setAttribute("value", "Añadir");
        botoNuevo.setAttribute("class", "nuevoBoton")

        tarjeta.insertBefore(tituloTarjeta, tarjeta.children[0]);
        tarjeta.insertBefore(botoNuevo, tarjeta.children[1]);
        bloque.appendChild(tarjeta);
        tituloTarjeta.focus();

            botoNuevo.addEventListener("click", function(event) {
                event.preventDefault();
                var textoTarjeta = tituloTarjeta.value;
                var nuevaTarjeta = document.createElement("div");

                nuevaTarjeta.innerHTML = textoTarjeta;
                tarjeta.style.display = "none";
                bloque.appendChild(nuevaTarjeta);
                nuevaTarjeta.classList.add("estiloTarjeta");
                bloque.appendChild(ancor);
                ancor.style.display = "block";
            });
        };
    });  
};

function moverForm(bloque){
    
    casilla.style.display = "inline";
    
    receptor.appendChild(casilla);
    formulario.remove();
    receptor.appendChild(formulario);
};