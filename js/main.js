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
    bloque.insertBefore(tituloLista, bloque.children[0]);
    bloque.insertBefore(ancor, bloque.children[1]);
    receptor.appendChild(bloque);
    moverForm();

    ancor.addEventListener("click", function(){
        crearTarjeta();
    });

    function crearTarjeta(){
    ancor.style.display = "none";
    var nuevoTitulo = document.createElement("textarea");
    var tarjeta = document.createElement("form");
    var botoNuevo = document.createElement("input");

    botoNuevo.setAttribute("type", "submit");
    botoNuevo.setAttribute("value", "Añadir");

    tarjeta.insertBefore(nuevoTitulo, tarjeta.children[0]);
    tarjeta.insertBefore(botoNuevo, tarjeta.children[1]);

    /*botonNuevo.addEventListener("click", function(e) {
            e.preventDefault();
            var textoTarjeta = nuevoTitulo.value;
            var divTarjeta = document.createElement("div");
            div.innerHTML = textoDiv;
            tarjeta.style.display = "none";
            ancor.parentElement.appendChild(div);
            div.classList.add("divBorder");
            div.parentElement.appendChild(enlace);
            ancor.style.display = "block";

        });*/
    }
}

function moverForm(){
    var newReceptor = document.createElement("div");

    newReceptor.setAttribute("class","derecha");
    casilla.style.display = "inline";

    contenedor.insertBefore(newReceptor, contenedor.children[1]);
    newReceptor.insertBefore(casilla, newReceptor.children[0]);
    newReceptor.insertBefore(formulario, newReceptor.children[1]);
}

