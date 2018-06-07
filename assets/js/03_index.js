function print(obj) {
    console.log(JSON.stringify(obj, undefined, 2) + '\n');
}

//Execution



// Clicks Media (funzione di funzione)

function getClicksMedia() {

    var length = json.data.length

    media = 0;


    media = getTotalClicks() / json.data.length;

    return media;

}

print(
    getClicksMedia()
);



/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalViews() {

    var length = json.data.length

    sommadesktop = 0;

    for(x = 0;x < length;x++){

        sommadesktop += (json.data[x].paid_views.desktop + json.data[x].paid_views.mobile);

    

    }
    return sommadesktop;

    
}

print(
    getTotalViews()
);


/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalMobile() {

    var length = json.data.length

    somma = 0;

    for(x = 0;x < length;x++){

        somma += (json.data[x].paid_views.mobile);

    }
    return somma;

    
}

print(
    getTotalMobile()
);


/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalDesktop() {

    var length = json.data.length

    somma = 0;

    for(x = 0;x < length;x++){

        somma += (json.data[x].paid_views.desktop);

    }
    return somma;

    
}

print(
    getTotalDesktop()
);



/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Total Interactions
function getTotalInteractions() {

    var length = json.data.length

    somma = 0;

    for(x = 0;x < length;x++){

         somma += (json.data[x].interactions.reactions + json.data[x].interactions.comments + json.data[x].interactions.shares);

    }
    return somma;
}



// Platforms
function getAllPlatforms() {

    var length = json.data.length

    result = [];

    for(x = 0;x < length;x++){

        
           result.push(json.data[x].platform);


    }

    return result;

}

// Total Impression
function getTotalImpressions() {

    var length = json.data.length

    somma = 0;

   



    for(x = 0;x < length;x++){

        somma += json.data[x].impressions;


    }



    return somma;

}



// Total Clicks


function getTotalClicks() {

    var length = json.data.length

    somma = 0;

    for(x = 0;x < length;x++){


         somma += json.data[x].clicks;


    }

    return somma;

}



/*

// Clicks Media
function getClicksMedia() {

    var length = json.data.length

    somma = 0;

    media = 0;



    for(x = 0;x < length;x++){


         somma += json.data[x].clicks ;


    }

    media = somma / json.data.length;

    return media;

}

*/



function addClicks(valore1, valore2) {
   for(x = 0;x < json.data.length;x++){

    if (json.data[x].date == valore1) {
     json.data[x].clicks += valore2;


    }
    
}

}


print(
    getTotalInteractions()
);



print(
    getAllPlatforms()
);


print(
    getTotalImpressions()
);


print(
    getTotalClicks()
);





addClicks("2018-03-15T00:00:00.000Z", 3256)

print(
    json
);



/*

print(
    getTotalImpressions()
);

print(
    getTotalClicks()
);

print(
    getClicksMedia()
);

print(
    addClicks("2018-03-15T00:00:00.000Z", 3256)
);

*/