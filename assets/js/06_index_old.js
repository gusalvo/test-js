function print(obj) {
    console.log(JSON.stringify(obj, undefined, 2) + '\n');
}

//Execution


function getTotalInteractions() {

    var length = json.data.length

    somma = 0;

  //  for(x = 0;x < length;x++){

       

           for(y = 0;y < length;y++){

           // somma = 0;

           // somma += (json.data[y].interactions.reactions + json.data[y].interactions.comments + json.data[y].interactions.shares);

           var array2 = json.data[y].interactions

             console.log(Object.keys(array2));

             console.log(Object.values(array2));

            // somma += (Object.values(array2));

            }

 //   }
   return somma;
}


print(
    getTotalInteractions()
);

// 


/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalViews() {

    var length = json.data.length

    sommadesktop = 0;

    for(x = 0;x < length;x++){

        sommadesktop += (json.data[x].paid_views.desktop + json.data[x].paid_views.mobile);

    

    }
    return sommadesktop;

    
}

print(
    getTotalViews()
);


/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalMobile() {

    var length = json.data.length

    somma = 0;

    for(x = 0;x < length;x++){

        somma += (json.data[x].paid_views.mobile);

    }
    return somma;

    
}

print(
    getTotalMobile()
);


/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalDesktop() {

    var length = json.data.length

    somma = 0;

    for(x = 0;x < length;x++){

        somma += (json.data[x].paid_views.desktop);

    }
    return somma;

    
}

print(
    getTotalDesktop()
);



/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  ++++++++++++++++ Somma Array


var lista = { a: 1 , b: 2 , c:8 };
var somma = 0;


for(var key in lista){

    somma += lista[key];
}

 console.log(somma);



// +++++++++++++++++++++++++++++++ ALTRO ++++++++++++++++++++++++++++++++++ 


var People = [{
    name: 'joe',
    job: 'programmer',
    age: 25,
  }, {
      name: 'bob',
      job: 'plumber',
      age: 30,
  }];



// funzione
function getPeople() {

var length = People.length

somma = 0;

result = [];

for(x = 0;x < length;x++){

   somma += People[x].age
   // console.log(somma); // ++++++++++

}

return result;

}

// getPeople();

print(
  getPeople()
);