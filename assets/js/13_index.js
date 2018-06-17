function Modulo() {
    // Variabili associate ai campi del modulo
    var nome = document.modulo.nome.value;
    var sesso = document.modulo.sesso.value;
    
 
    
      
    //Effettua il controllo sul campo NOME
    if ((nome == "") || (nome == "undefined")) {
        alert("Il campo Nome è obbligatorio.");
        document.modulo.nome.focus();
        return false;
    }

    //Effettua il controllo sul campo SESSO
    if ((sesso == "") || (sesso == "undefined")) {
        alert("Il campo Sesso è obbligatorio.");
        document.modulo.sesso.focus();
        return false;
    }
    
    //INVIA IL MODULO
    else {
        document.modulo.action = "elabora_dati.asp";
        document.modulo.submit();
    }
}