var obj = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.github.com/gists/public";

obj.open(method, url, true);

obj.addEventListener('progress', function (x) {
    console.log('progress', x);
});

obj.addEventListener('load', function (x) {
    console.log(x.target.response);
});

obj.addEventListener('error', function (x) {
    console.log('error', x);
});

obj.addEventListener('abort', function (x) {
    console.log('abort', x);
});


obj.send();