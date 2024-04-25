let menuVisible = false;
//Funcion para mostrar y oculatar el menu
function mostrar0ocultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocualtar el menu despues de dar click
    document.getElementById("nav").classList ="";
    menuVisible = false;
}