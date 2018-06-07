function print(obj) {
    console.log(JSON.stringify(obj, undefined, 2) + '\n');
}


//Execution

var n = 100
var b = true
var s = 'stringa'
ar = [n, b, s]


for(x = 0;x < ar.length;x++) {

    console.log(ar[x]);


}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

var auto = {

    colore: 'bianco',
    marca: 'opel',
    km: 3500,
    accessori: ['radio', 'wi-fi', 'colore metal'],


};
 console.log(auto.accessori);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[1][1] ); 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++



// var fruits = new Array('mela', 'arancia', 'fragola', 'pesca');

 var fruits = ['mela', 'arancia', 'fragola', 'pesca']



// console.log(fruits[2]);

// console.log(fruits.length);


for(x = 0;x < fruits.length;x++) {

    console.log(fruits[x]);


}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

sum = 0;

for(var key in salaries) {

sum += salaries[key]

}

console.log(sum);



