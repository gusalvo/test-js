function nameurl(e) {

    for (let i = 0; i < e.length; i++) {


      

        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        document.body.appendChild(div);
        h3.textContent = e[i].owner.login;


          // a
        var a = document.createElement("a");
        a.setAttribute("href", e[i].owner.html_url);
        a.setAttribute("target", '_blank');


          // img
          var img = document.createElement("img");
          img.setAttribute("src", e[i].owner.avatar_url);
          

       

        a.appendChild(img);

        div.appendChild(a);

        div.appendChild(h3);

        var h5 = document.createElement("h5");
        document.body.appendChild(div);
        h5.textContent = e[i].description;
        div.appendChild(h5);
        

        console.log(e);
    
        
    }


    
}

var obj = new XMLHttpRequest(),
    method = "GET",
    url = "http://192.168.20.173:8888/data.json";

obj.open(method, url, true);

obj.addEventListener('progress', function (x) {
    console.log('progress', x);
});

obj.addEventListener('load', function (x) {

    var response = JSON.parse(x.target.response);


    nameurl(response);


});

obj.addEventListener('error', function (x) {
    console.log('error', x);
});

obj.addEventListener('abort', function (x) {
    console.log('abort', x);
});

obj.send();













