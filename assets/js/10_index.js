var json = {

    getAllPlatforms: function() {


        var length = json.data.length

        result = [];

         for(x = 0;x < length;x++){

        result.push(json.data[x].platform);

    }
            return result;


        } ,


    data: [
        {
            "interactions": {
                "reactions": 1,
                "comments": 5,
                "shares": 0
            },
            "q25": 74,
            "q50": 26,
            "q75": 14,
            "q100": 3,
            "q_complete": 3,
            "clicks": 1,
            "unique_views": 172,
            "reach": 1376,
            "platform": "instagram",
            "impressions": 1490,
            "earned_views": {
                "desktop": 0,
                "mobile": 171
            },
            "paid_views": {
                "desktop": 0,
                "mobile": 55
            },
            "date": "2018-03-14T00:00:00.000Z"
        }, 
        {
            "interactions": {
                "reactions": 22,
                "comments": 0,
                "shares": 0
            },
            "q25": 3918,
            "q50": 1267,
            "q75": 494,
            "q100": 269,
            "q_complete": 269,
            "clicks": 35,
            "unique_views": 7396,
            "reach": 18360,
            "platform": "facebook",
            "impressions": 21007,
            "earned_views": {
                "desktop": 0,
                "mobile": 4847
            },
            "paid_views": {
                "desktop": 5,
                "mobile": 2853
            },
            "date": "2018-03-15T00:00:00.000Z"
        }, 
        {
            "interactions": {
                "reactions": 0,
                "comments": 0,
                "like": 11,
                "shares": 0
            },
            "q25": 390,
            "q50": 131,
            "q75": 90,
            "q100": 77,
            "q_complete": 77,
            "clicks": 12,
            "unique_views": 840,
            "reach": 912,
            "platform": "facebook",
            "impressions": 1576,
            "earned_views": {
                "desktop": 0,
                "mobile": 1039
            },
            "paid_views": {
                "desktop": 0,
                "mobile": 388
            },
            "date": "2018-03-16T00:00:00.000Z"
        }
    ]
};

// +++++++++++++++++++++++++++++++++++++++++++++++++


// Total Interactions
var view = (function(j) {


    // 1. funzione
    function getTotalViews() {

        var length = j.data.length
    
        sommadesktop = 0;
    
        for(x = 0;x < length;x++){
    
            sommadesktop += (j.data[x].paid_views.desktop + j.data[x].paid_views.mobile);
    
        }
        return sommadesktop;
    
        
    }


    // 2. funzione
    function getTotalMobile() {

        var length = json.data.length
    
        somma = 0;
    
        for(x = 0;x < length;x++){
    
            somma += (json.data[x].paid_views.mobile);
    
        }
        return somma;
    
        
    }



    return {

        generalViews: getTotalViews,

        mobileViews: getTotalMobile

    }

    
})(json);


view.generalViews();
console.log(view.generalViews());


view.mobileViews();
console.log(view.mobileViews());


/* ++++++++++++++++++++++++++++++++++++++++ MODULI PER FORM

var Form = (function(input){
    function render() {

        return '<html>' + input.render();
    }

    return {
        render: render
    }
})(Input)

var Input = (function(){
    function render() {

    }

    return {
        type: 'button',
        value: 'click',
        render: render
    }
})()

Form.render()
*/