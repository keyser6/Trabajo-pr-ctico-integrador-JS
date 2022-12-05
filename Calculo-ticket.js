const precioticket = 200 ;

function calculo() {
    var cantidadtickets = document.getElementById ('inputCantidad').value ;
    var desc= document.getElementById('inputCategoria').value ;
    var preciounidadcondesc= (precioticket * desc);
    var precio= cantidadtickets * preciounidadcondesc;
    document.getElementById ('comprafinal').value= 'Total a pagar: $'+ precio;
}

