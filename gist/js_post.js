var obj = new XMLHttpRequest(),
    method = "POST",
    url = "http://192.168.20.173:4000/teams";

obj.open(method, url, true);
obj.setRequestHeader('Content-type', 'application/json; charset=utf-8');

obj.addEventListener('progress', function (x) {
   // console.log('progress', x);
});

obj.addEventListener('load', function (x) {

    var response = JSON.parse(x.target.response);

    console.log(response);


});

obj.addEventListener('error', function (x) {
   // console.log('error', x);
});

obj.addEventListener('abort', function (x) {
   // console.log('abort', x);
});




function submitmodule() {

       var btninvio = document.querySelector('#pulsante');
       btninvio.addEventListener('click', function(){

        var data = {};

        var name = document.querySelector('#name');
        data.name = name.value;

        var city = document.querySelector('#city');
        data.city = city.value;

        var category = document.querySelector('#category');
        data.category = category.value;

        var json = JSON.stringify(data);

        obj.send(json);

       });
   
}

submitmodule();







