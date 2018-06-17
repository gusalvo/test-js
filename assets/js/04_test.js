function square(number) {

    return number * number;

    
   
  }

  var y = square(5);

  console.log(y);
 
/* +++++++++++++++  */


  var square = function(number) { return number * number };
  var x = square(4) // x gets the value 16 

  console.log(x);


// altra funzione +++++

function moltiplico(number) {
  return number * number;
  
}

var z = moltiplico(7);
console.log(z);


// ++++++


var modulo = (function (){

  function moltiplico(number) {
    return number * number;
  }

  return {
    moduloview : moltiplico
  }


}

)();


modulo.moduloview(105);
console.log(modulo.moduloview(105));



// 


var modulo = (function(){

  function moltiplico(number) {
    return number * number;
  }

  return {
    moduloview1 : moltiplico
  }
}

)();

modulo.moduloview1(8);
console.log(modulo.moduloview1(8));


// +++++++++++

var modulo1 = (function(){

  function moltiplico5(number){
    return number * number;
  }
  
  return {
    moltiplicoViews : moltiplico5
  }

}

)();


modulo1.moltiplicoViews(5);
console.log(modulo1.moltiplicoViews(5));

// ++++++++++++++++


