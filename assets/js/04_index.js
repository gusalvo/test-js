function print(obj) {
  console.log(JSON.stringify(obj, undefined, 2) + '\n');
}

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


