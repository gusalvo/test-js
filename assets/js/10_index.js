// IIFE

var api = {
    en: {},
    it: {}
};

var Language = (function() {
    var currentLanguage = null;
    var languageElement = document.querySelector('#language-choice');

    languageElement.addEventListener('change', function(e) {
        currentLanguage = e.target.value;
    })

    return {
        get: function() {
            return currentLanguage;
        }
    };
})(document);

var Api = (function(api, language) {
    
    return {
        getApi: function()  {
            return api[language.get()];
        }
    };
})(api, Language);

var Render = (function() {
    // stampa sul dom

    return {
        
    };
})(Api);

var Editor = (function() {
    // Creazione dom e stampa update dom

    return {
        
    };
})(Api, Render);

var App = (function(document, render, editor) {
    document.addEventListener("DOMContentLoaded", function() {
        
    });

})(document, Render, Editor);
