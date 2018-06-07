
/*
var el = document.getElementById("id"); // Returns a single element
var el = document.getElementsByClassName("class");  // Returns a list
var el = document.getElementsByTagName("tag");  // Returns a list
var el = document.querySelector(".class#id"); // Returns a single element
var el = document.querySelectorAll(".class"); // Returns a list
*/


var el = document.getElementById("pippo"); // Returns a single element
el.style.color = "red";

var el = document.querySelector(".giallo");

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
el.id = "id";
console.log(el.textContent); // print note text content


el.getAttribute("src");
el.attributes // lista

*/


