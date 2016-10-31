var contenedor = document.getElementById("contenedor");
var receptor = document.getElementById("receptor");
var casilla = document.getElementById("casillero");
var formulario = document.getElementById("formulario");
var inpuText = document.getElementById("inpuText");
var boton = document.getElementById("boton");
var contador = 1;

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
  bloque.setAttribute("draggable", "true");
  tituloLista.setAttribute("class", "tituloLista");
    
    ancor.appendChild(textAncor);
    bloque.insertBefore(tituloLista, bloque.children[0]);
    bloque.appendChild(ancor);
    receptor.appendChild(bloque);
    
    ancor.addEventListener("click", function(event) {
        event.preventDefault();
        crearTarjeta(ancor);
    });

    bloque.addEventListener("dragover", dragSobreDiv, false);
    bloque.addEventListener("dragleave", dragSalioDiv, false);
    bloque.addEventListener("drop", manejarDrop, false);

       function dragSobreDiv(e){
            e.preventDefault();
            this.classList.add("over");
        };

        function dragSalioDiv(e){
            e.preventDefault();
            this.classList.remove("over");
        };

        function manejarDrop(e) {
            e.preventDefault();
            var dato = e.dataTransfer.getData("text");
            e.target.appendChild(document.getElementById(dato));
        };
};

function crearTarjeta(ancor){
    ancor.style.display = "none";
        
    var tarjeta = document.createElement("form");
    var tituloTarjeta = document.createElement("textarea");
    var botoNuevo = document.createElement("input");

    botoNuevo.setAttribute("type", "submit");
    botoNuevo.setAttribute("value", "Añadir");
    botoNuevo.setAttribute("class", "nuevoBoton")

    tarjeta.insertBefore(tituloTarjeta, tarjeta.children[0]);
    tarjeta.insertBefore(botoNuevo, tarjeta.children[1]);
    ancor.parentElement.appendChild(tarjeta);
    tituloTarjeta.focus();

        botoNuevo.addEventListener("click", function(event) {
            event.preventDefault();
            var textoTarjeta = tituloTarjeta.value;
            var nuevaTarjeta = document.createElement("div");

            nuevaTarjeta.innerHTML = textoTarjeta;
            tarjeta.style.display = "none";
            ancor.parentElement.appendChild(nuevaTarjeta);
            nuevaTarjeta.classList.add("estiloTarjeta");
            nuevaTarjeta.setAttribute("draggable", "true");
            ancor.parentElement.appendChild(ancor);
            ancor.style.display = "block";
            nuevaTarjeta.setAttribute("id", contador++);

            nuevaTarjeta.addEventListener("dragstart", dragIniciado);
            nuevaTarjeta.addEventListener("drop", manejarDrop);
            nuevaTarjeta.addEventListener("dragend", dragTerminar);
        });
};

function dragIniciado(e) {
    this.classList.add("bordeTarjeta")
    e.dataTransfer.setData("text", e.target.id);
};
                
function manejarDrop(e) {
    var dato = e.dataTransfer.getData("text");
    e.target.parentElement.insertBefore(document.getElementById(dato), e.target);
};

function dragTerminar(e) {
    e.preventDefault();
    this.classList.remove("bordeTarjeta")
};

//function dragEntro Div(e){
    //this.classList.add("over");
//};

function dragSobreDiv(e){
    e.preventDefault();
};

// function dragSalioDiv(e){
    //this.classList.remove("over");
//};

function moverForm(bloque){
    casilla.style.display = "inline";
   
    receptor.appendChild(casilla);
    formulario.remove();
    receptor.appendChild(formulario);
}