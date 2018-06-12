
/*
var el = document.getElementById("id"); // Returns a single element
var el = document.getElementsByClassName("class");  // Returns a list
var el = document.getElementsByTagName("tag");  // Returns a list
var el = document.querySelector(".class#id"); // Returns a single element
var el = document.querySelectorAll(".class"); // Returns a list
*/



var contenitore = document.getElementById("contenitore");
// contenitore.style.alignItems = "center";



var banner = document.getElementById("banner");
banner.style.background = "yellow";
banner.style.width = "300px";
banner.style.textAlign = "left";



var el = document.getElementById("pippo"); // Returns a single element
el.style.color = "red";


// seleziona tutti gli elementi con stile giallo li trasformo in verde
var el1 = document.querySelectorAll('.giallo');
console.log(el1);
// el1[2].style.color = 'green';

for (let i = 0; i < el1.length; i++) {
    
    el1[i].style.color = 'green';
    
}
// 

el.classList.add("rosso");
el.className = "rosso";

var image = document.getElementById("image");
var src = image.getAttribute("src");
console.log(src);


var title = document.getElementsByTagName("h1");
console.log(title.textContent); 

for (let index = 0; index < title.length; index++) {
    
    console.log(title[index].textContent)
    
}




/*
el.className = "nuovaclasse";
el.style.color = "red";
el.classList.add("nuovaclasse");
el.classList.remove("");
el.id = "id";
console.log(el.textContent); // print note text content


el.getAttribute("src");
el.attributes // lista

*/


