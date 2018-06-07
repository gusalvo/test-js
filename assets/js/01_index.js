var info = {
    nome:"Guglielmo",
    cognome: "Salvo",
	annodinascita:1973,
	citta:"Palermo",
    hobby: ['lettura', 'mare', 'dipingere', 'sport'],
    personafisica: true,
    

	
    };


    
    function nome(){
        console.log("Nome e Cognome: "+info.nome + " " +info.cognome);
         } 

        
         function hobby() {

            var length = info.hobby.length
    
    
            console.log(length);
    
            for(x = 0;x < length;x++){
                console.log(info.hobby[x]);
                
            }
    
        }   



    function hobby2() {

            var length = info.hobby.length
    
    
            console.log(length);

            var x = 0;
    
            while (x < length) {
                console.log(info.hobby[x]);
                x++;
            }
        
      
        }  


    /*
    function aggiungi(valore) {

        info.hobby.push(valore)


    }    


    aggiungi('informatica');
    aggiungi('collezionionismo');

    console.log(info.hobby);

    */

    function togliere(valore) {

        info.hobby.splice(valore,1)

        console.log(info.hobby);

    }  


    function sostituisci(valore, valore2) {

        info.hobby.splice(valore,1, valore2)

        console.log(info.hobby);

    }  

    function aggiungi(valore) {

        info.hobby.push(valore)


    }    





    sostituisci(2, 'moto')

    aggiungi('equitazione');


   // togliere(2);

    hobby();
    

    /*
    
    console.log("Info: ", info);	
    
    nome();

    hobby();

    hobby2();



    if(info.length > 3 ){
        

    } else if(info.leght < 3)
    
    
    {

        console.log('Maggiore di 3');
        
    } 
    
    
    else 
    
    
    {
        console.log('uguale a 3');



    }


   // aggiungi();

   */


    
