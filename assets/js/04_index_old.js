
// somma elementi
/*
function sum( obj ) {
    var sum = 0;
    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += parseFloat( obj[el] );
      }
    }
    return sum;
  }
  
  var sample = { a: 1 , b: 2 , c:3 };
  var summed = sum( sample );

  console.log(summed);
*/


//


var sample = { a: 1 , b: 2 , c:3 };
var summed = 0;

for (var key in sample) {
    summed += sample[key];

};

console.log(summed);

//  ++++++++++++++++ 


var lista = { a: 1 , b: 2 , c:8 };
var somma = 0;


for(var key in lista){


    somma += lista[key];


}


 console.log(somma);


//  ++++++++++++++++ 

var sum = [{a:1, b:2, c:3, d:4},{a:2, b:3, c:4, d:5}],
result = sum.reduce(function (r, o) {
    r.push(Object.keys(o).reduce(function(r, b){ return r + o[b]; }, 0));
    return r;
}, []);

console.log(result);


// ++++++


var arrayPeople = [{
    name: 'joe',
    job: 'programmer',
    age: 25,
  }, {
      name: 'bob',
      job: 'plumber',
      age: 30,
  }];
  
  var ageAverage = function(array) {
    var age = 0,
        average;
  
    for (var i = 0; i < array.length; i++) {
      age += array[i].age;
    }
  
    // average = age / array.length; // media
       average = age  // somma
    return average;
  };
  

  console.log(
    ageAverage(arrayPeople)
  );
 





/*
var arr = ["a", "b", "c"];
console.log(Object.keys(arr));



var obj = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.values(obj));
*/

//var list = {'reazioni': 1, 'commenti':5, 'like':10};
var list = [1,2,3,4,5];
// console.log(Object.values(list));


// somma = (list.reazioni + list.commenti + list.like);
// console.log(somma);

var somma = 0;


for(x = 0;x < list.length;x++){


    somma += list[x];
   console.log(list[x])


}


 console.log(somma);



// somma = (list.reazioni + list.commenti + list.like);
// console.log(somma);

// somma = Object.values(list);

//somma += Object.values(list);
//console.log(somma);





var numbers = [1,2,3,4];
var totalAmount = 0;

for (var x = 0; x < numbers.length; x++) {

    totalAmount += numbers[x];
}

// console.log(totalAmount); //10 (1+2+3+4)

