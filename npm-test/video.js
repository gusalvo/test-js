/*
*
* video module
*
*/

/*


// con funzione fuori

$(document).ready(function() {
    var el = $('#video').get(0);
    play(el);
})


function play(el) {


    $('#play').click(function () {
        
            el.play();
    
    })
    
}

*/


// con funzione dentro
/*
$(document).ready(function () {
    var el = $('#video').get(0);
    function play() {


        $('#play').click(function () {
            
                el.play();
        })
        
    }
    play();
})
*/

//


// senza funzione
$(document).ready(function () {
    var el = $('#video').get(0);

        $('#play').click(function () {
            
                el.play();
        })
    
});