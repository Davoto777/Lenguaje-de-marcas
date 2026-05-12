// cojo el boton y el menu por el id pal menu desplegable
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuDesplegable");

// Si pinchan el boton, q se ponga o quite la clase q lo esconde
btnMenu.addEventListener("click", function() {
    menu.classList.toggle("oculto");
});

// --- PARTE DE LA GALERIA ---
var imgGrande = document.getElementById("imgGrande");
var miniaturas = document.querySelectorAll(".thumb"); // pillo todas las fotos peques

// Hago un bucle para q todas las miniaturas funcionen al hacer click
for (var i = 0; i < miniaturas.length; i++) {
    miniaturas[i].addEventListener("click", function() {
        imgGrande.src = this.src; // q la foto grande cambie el src por el de la peque q toque
    });
}

// --- LA CALCULADORA ---
var btnCalcular = document.getElementById("btnCalcular");
var resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(event) {
    event.preventDefault(); // pa q no se refresque la pagina sola

    // saco los valores de los cuadros de texto
    var cantidadTexto = document.getElementById("cantidad").value;
    var precioTexto = document.getElementById("tipo").value;

    // los paso a numero pa poder multiplicar
    var cantidad = parseInt(cantidadTexto);
    var precio = parseInt(precioTexto);

    // si no es un numero o pone menos de 1, q de error
    if (isNaN(cantidad) || cantidad < 1) {
        resultado.innerHTML = "Introduce una cantidad válida.";
    } else {
        var total = cantidad * precio * 1.10; // meto el 10% de IVA a mano
        resultado.innerHTML = "Total con IVA: " + total.toFixed(2) + "€"; // escribo el total con 2 decimales
    }
});

// --- VALIDACION DEL REGISTRO ---
var btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault(); // pa q no se mande solo todavia

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // miro q el nombre no sea muy corto
    if (nombre.length < 3) {
        alert("¡Oye! El nombre tiene q tener al menos 3 letras.");
    } 
    // miramos que tenga un punto despues del @
    else if (!email.includes("@") || !email.includes(".")) {
        alert("Pon un correo de verdad, que le falta el '@' o el '.' (ej: pepe@gmail.com)");
    } 
    
    else if (!(email.includes("gmail.com") || email.includes("outlook.com") || email.includes("hotmail.com"))) {
        alert("Solo aceptamos correos de Gmail, Outlook o Hotmail, ¿vale?");
    }
    else {
        alert("¡Listo! ¡Estate atento al correo!");
    }
});