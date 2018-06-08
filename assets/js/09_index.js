var info = {
    nome:"Guglielmo",
    cognome: "Salvo",
	annodinascita:1973,
	citta:"Palermo",
    hobby: ['lettura', 'mare', 'dipingere', 'sport'],
    personafisica: true,
    

	
    };

    // Intestazione

    var intestazione = document.createElement("h1");
    intestazione.innerHTML = info.nome + " " + "<strong>" + info.cognome + "</strong>";
    var contenitore = document.getElementById("intestazione");
    contenitore.appendChild(intestazione)


    // Hobby

            var length = info.hobby.length
    

            for(x = 0;x < length;x++){
               // console.log(info.hobby[x]);

               var newElement = document.createElement("div");

                newElement.innerHTML = info.hobby[x];

                var contenitore = document.getElementById("contenitore");
                contenitore.appendChild(newElement)
                
            }



    
       // newElement.innerHTML = info.nome + " " + info.cognome;
    // var contenitore = document.getElementById("contenitore");
       // contenitore.appendChild(newElement)
        



// +++++++++++++ 

/*
var newElement = document.createElement("div");
newElement.innerHTML = "<div>HTML come testo</div>";




el.append(newElement);
el.prepend(newElement);
document.body.insertBefore(newElement, elementodiriferimento);

*/


/*
var mio_div = null;
var nuovoDiv = null;

function aggiungiElemento()
{
  // crea un nuovo elemento DIV
  // e gli assegna un contenuto
  nuovoDiv = document.createElement("div");
  nuovoDiv.innerHTML = "<h1>Ciao a tutti!</h1>";

  // aggiunge l'elemento appena creato e il suo contenuto al DOM
  mio_div = document.getElementById("org_div1");
  document.body.insertBefore(nuovoDiv, mio_div);
}

*/




    