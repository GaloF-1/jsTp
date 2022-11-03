function recuento(){

    var cant, opc, total;
    cant = parseInt(document.getElementById("cantidad").value);
    opc = document.getElementById("opcion").value;

    if(cant > 0){
        total = 200 * cant;
    }
    else{
        total = 0;
    }

    if(opc == "junior"){
        total = total * 0.8;
    }

    if(opc == "trainee"){
        total = total * 0.8;
    }

    if(opc == "senior"){
        total = total * 0.8;
    }

    document.getElementById("total").innerHTML = "Total a pagar: " + total;
    
}