'use strict'



let clavesBusquedaPorTipo = ["animalista", "lgbtiq+", "canabico", "ambiental", "veganismo", "feminismo", "derechoshumanos", "capitalfederal", "buenosaires", "neuquen", "cordoba", "santafe", "catamarca", "chaco", "chubut", "corrientes", "entrerios", "formosa", "jujuy", "lapampa", "larioja", "mendoza", "misiones", "rionegro", "salta", "sanjuan", "sanluis", "santacruz", "santiagodelestero", "tucuman", "tierradelfuego"];

function esBusquedaPorTipo(palabra){
    let encontrado = clavesBusquedaPorTipo.some(elemento => elemento==palabra);
    return encontrado;
}

let clavesBusquedaPorNombre = ["voicot", "amnistia", "cels", "greenpeace", "amigos", "bios", "tinta", "revuelta", "colectiva", "digital", "onda", "federacion", "uva", "coala", "mama", "cameda"];

function esBusquedaPorNombre(palabra){
    let encontrado = clavesBusquedaPorNombre.some(elemento => elemento==palabra);
    return encontrado;
}

// Carga la pagina de resultados y guarda los datos necesarios para mostrarlos.
function buscarResultados(tipo){
    localStorage.setItem("mostrar", JSON.stringify(true));
    localStorage.setItem("resultado", JSON.stringify(tipo));
    location.href = "resultados.html";
}

// Carga la pagina de articulos y guarda los datos necesarios para mostrar un articulo seleccionado.
function buscarArticulo(nombre){
    localStorage.setItem("mostrar", JSON.stringify(true));
    localStorage.setItem("articulo", JSON.stringify(nombre));
    location.href = "articulos.html";
}

// muestra el articulo cuyo nombre fue guardado en el localStorage.
function mostrarArticulo(){
    let articuloId = JSON.parse(localStorage.getItem("articulo"));
    document.getElementById(articuloId).style.display = "block";
    localStorage.setItem("mostrar", JSON.stringify(false));
    localStorage.setItem("articulo", JSON.stringify(""));
};

// muestra los resultados cuyo tipo es el pasado por parametros. El tipo es una ubicacion o clase de activismo.
function mostrarResultados(tipo){
    let resultados = document.getElementsByClassName(tipo);
    if(resultados.length>0){
        document.getElementById("hayResultados").style.display = "block";
        for(let elemento=0; elemento<resultados.length; elemento++){
            resultados[elemento].style.display = "flex";
        };
        // resultados.forEach( (elemento, indice, array) => {
        //     elemento.style.backgroundColor = "yellow";
        // });
        localStorage.setItem("resultado", JSON.stringify(""));
    }
    else{
        document.getElementById("noHayGrupos").style.display = "flex";
    }
};

/*
Controlo en que pagina estoy para mostrar los resultados de las busquedas en caso que los datos del localStorage lo requieran.
*/
if((window.location.href.includes("resultado"))&&(JSON.parse(localStorage.getItem("mostrar")))){
    let palabraResultado = JSON.parse(localStorage.getItem("resultado"));
    if(palabraResultado!="error"){
        mostrarResultados(palabraResultado);
    }
    else{
        document.getElementById("errorBusqueda").style.display = "flex";
    }
    localStorage.setItem("mostrar", JSON.stringify(false));
}
else if(window.location.href.includes("articulos")&&(JSON.parse(localStorage.getItem("mostrar")))){
    mostrarArticulo();
}
else{
    localStorage.setItem("mostrar", JSON.stringify(false));
}

localStorage.setItem("clavesTipo", JSON.stringify(clavesBusquedaPorTipo));
localStorage.setItem("clavesNombre", JSON.stringify(clavesBusquedaPorNombre));

$("#lupa").click(function(){
    let buscar = $("#busqueda").val();
    if(buscar!=""){
        buscar = buscar.replace(/ /g, "").toLowerCase().trim();
        localStorage.setItem("mostrar", JSON.stringify(true));
        if(esBusquedaPorTipo(buscar)){
            buscarResultados(buscar);
        }
        else if(esBusquedaPorNombre(buscar)){
            buscarArticulo(buscar);
        }
        else if(buscar=="#mtf#"){
            easterEgg();
            $("#busqueda").val("");
        }
        else{
            buscarResultados("error");
        }
    }
    else{
        alert("No ingreso nada para buscar!!!");
        $("#busqueda").focus();
    }
});

function easterEgg(){
    $("header").css("background", "none").css("backgroundColor", "#142d4c");
    $("h1 > p > span").css("color", "#00b906");
    $("nav").css("backgroundColor", "#00b906");
    $("footer").css("background", "none").css("backgroundColor", "#142d4c");
}