'use strict'

function abrirGaleria(){
    $("#galeria").fadeToggle(2000);
    $("#galeria").css("display", "flex");
}

function setearImagen1(){
    $("#galeria").fadeToggle(2000);
    $("#usuarioFoto").attr("src", "img/icono1.png");
}

function setearImagen2(){
    $("#galeria").fadeToggle(2000);
    $("#usuarioFoto").attr("src", "img/icono2.png");
}

function setearImagen3(){
    $("#galeria").fadeToggle(2000);
    $("#usuarioFoto").attr("src", "img/icono3.png");
}

function setearImagen4(){
    $("#galeria").fadeToggle(2000);
    $("#usuarioFoto").attr("src", "img/icono4.png");
}

function setearImagen5(){
    $("#galeria").fadeToggle(2000);
    $("#usuarioFoto").attr("src", "img/icono5.png");
}

localStorage.setItem("comentarios", JSON.stringify([]));

let btn_comentar = $("#btn_comentar");

btn_comentar.click(function(){
    let nickObtenido = $("#usuario").val();
    let contenido_comentario = $("#cajaComentario").val();
    
    if(nickObtenido==""){
        $("#usuario").css("backgroundColor", "red");
        alert("Tienes que ingresar un nick");
    }
    else{
        $("#usuario").css("backgroundColor", "#fff");
    }

    if(contenido_comentario==""){
        $("#cajaComentario").css("backgroundColor", "red");
        alert("Tienes que escribir un comentario");
    }
    else{
        $("#cajaComentario").css("backgroundColor", "#fff");
    }

    if((nickObtenido!="")&&(contenido_comentario!="")){
        let srcImagenObtenida = $("#usuarioFoto").attr("src");
        let nuevoComentario = {
            nick: nickObtenido,
            srcImagen: srcImagenObtenida,
            contenido: contenido_comentario
        }
    
        let comentarios = JSON.parse(localStorage.getItem("comentarios"));
        comentarios.push(nuevoComentario);
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
        
        let contenedor = $("<div></div>");
        contenedor.css("display", "flex").css("border", "5px solid #22267b").css("borderBottom", "0px").css("alignItems", "center");
    
        let contenedorDatos = $("<div></div>");
        let estiloDAtos = {
            display: "flex",
            width: "20%",
            flexFlow: "column",
            backgroundColor: "#1ee494",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "120px"
        };
        contenedorDatos.css(estiloDAtos);
        
        let imagen = $("<img alt='imagenComentario'>");
        let estiloImagen = {
            width: "70px",
            height: "70px"
        };
        imagen.attr("src", srcImagenObtenida);
        imagen.css(estiloImagen);
    
        let nombre = nickObtenido;
        let p1 = $("<p></p>");
        p1.append(nombre);
    
        contenedorDatos.append(p1, imagen);
    
        let contenedorInfo = $("<div></div>");
        let estiloComentario = {
            width: "80%"
            
        };
        contenedorInfo.css(estiloComentario);
        
    
        let contenidoInfo = contenido_comentario;
        let p2 = $("<p></p>");
        p2.css("padding", "25px 20px").css("fontSize", "1.3em").css("wordWrap", "break-word");
        p2.append(contenidoInfo);
        contenedorInfo.append(p2);
    
        contenedor.append(contenedorDatos, contenedorInfo);
    
        $("#comentarios").append(contenedor);

        $("#cajaComentario").val("");
    }

});

// localStorage.clear();