function printMenu(menu) {
    var menuEl = document.getElementById('menuEL');

    var dataLength = menu.data.length;

    for (var i = 0; i < dataLength; i++) {
        var li = document.createElement("li");
        li.classList.add("Header-nav-el");

        var a = document.createElement("a");
        a.setAttribute("href", menu.data[i].href);
        a.textContent = menu.data[i].label;

        li.appendChild(a);

        menuEl.appendChild(li);
    }
}