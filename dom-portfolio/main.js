/**
 * It should print menu .Header-nav-el elements inside #menu
 *
 * <li class="Header-nav-el">
 *     <a href="#menu1">Menu 1</a>
 * </li>
 * 
 * @param menu
 * 
 * @return {undefined}
 */
function printMenu(menu) {
    var menuEl = document.getElementById('menuEL');

    menuEl.innerHTML = '';

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

/**
 * It should print inside #personalEl
 * 
 * <div class="PersonalInfos-image">
 *     <img src="https://www.placecage.com/500/500" alt="">
 * </div>
 * 
 * <div class="PersonalInfos-content">
 *     <h1>Name Surname</h1>
 *     <h2>Job position</h2>
 * 
 *     <ul class="PersonalInfos-skills">
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#... n</li>
 *     </ul>
 * 
 * 
 * </div>
 * 
 * @return {undefined}
 */
function printPersonalInfos(personal) {
    var personalEl = document.getElementById('personalEl');

    personalEl.innerHTML = '';


    var div = document.createElement("div");
    div.classList.add("PersonalInfos-image");
    var img = document.createElement("img");
 
    img.setAttribute("src", personal.data.img);
    div.appendChild(img);
    personalEl.appendChild(div);

    // ++++

    var divinfo = document.createElement("div");

   //  divinfo.innerHTML = '';

    divinfo.classList.add("PersonalInfos-content");

    var h1 = document.createElement("h1");
    h1.textContent = personal.data.firstname + " " +personal.data.surname;
    divinfo.appendChild(h1);

    var h2 = document.createElement("h2");
    h2.textContent = personal.data.position;
    divinfo.appendChild(h2);


    ///

    var ul = document.createElement("ul");
    ul.classList.add("PersonalInfos-skills");

    


    for (let e = 0; e < personal.data.skills.length; e++) {

        var li = document.createElement("li");
       
        li.textContent = personal.data.skills[e];

        ul.appendChild(li);

    }

    divinfo.appendChild(ul);

    ///
    

    var personalEl = document.getElementById("personalEl");
    personalEl.appendChild(div)
    personalEl.appendChild(divinfo)

    



    // implementation here
}

/**
 * It should print inside #workEl
 *
 * <h3 class="WorkExperience-title">Work Experience</h3>
 * <div class="WorkExperience-content">
 *     <div class="WorkExperience-row">
 *         <h4>Job Title</h4>
 *         <p>...</p>
 *     </div>
 * </div>
 * 
 * @return {undefined}
 */

function printWorkExperience(works) {
    var workEl = document.getElementById('workEl');

    workEl.innerHTML = '';

    var h3 = document.createElement("h3");
    h3.classList.add("WorkExperience-title");
    h3.textContent = works.section.title;
    workEl.appendChild(h3);

    var divwork = document.createElement("div");
    divwork.classList.add("WorkExperience-content");

    var divworkexp = document.createElement("div");
    divworkexp.classList.add("WorkExperience-row");


    var worksLength = api.en.works.data.length;

    // ciclare esperienze
    for (let f = 0; f < worksLength; f++) {
        var h4 = document.createElement("h4");
        h4.textContent = works.data[f].title;
       // console.log("title");
        divworkexp.appendChild(h4);


        var p = document.createElement("p");
        p.textContent = works.data[f].description;
        divworkexp.appendChild(p);


        var divline = document.createElement("div");
        divline.classList.add("LineRed");
       // divline.textContent = "...........................";
        divworkexp.appendChild(divline);



    }


    divwork.appendChild(divworkexp);
    workEl.appendChild(divwork);

    // implementation here
}



function fselect() {

    // Ciclo Select

    var selectLength = api.en.works.data.length;

    for (let y = 0; y < selectLength; y++) {

        var selectexperience = document.getElementById('selectexperience');
        var option = document.createElement("option");
        option.setAttribute("value", y);
        option.textContent = api.en.works.data[y].title;
        selectexperience.appendChild(option);
    
       // console.log("experience");
        
    }
    
}



function SelectOption() {

    var optionselect = document.querySelector('#selectexperience');
    optionselect.addEventListener("change", function (params) {

        var value = params.target.value;
        console.log(value);
                            
        var experience = document.querySelector('#experience');
        console.log(optionselect);


        if (value == "new") {

            experience.value = " ";
        }

        else {

            experience.value = api.en.works.data[value].title;
        }
            
        })
  
    // console.log(param1)

}



function miafunzione (){


    // ++++++++++++++++++++++ disabilita menu se off
    var lang = document.querySelector('#language-choice');

    var optionselect1 = document.querySelector('#selecton');
    optionselect1.addEventListener("change", function (params) {

        var value1 = params.target.value;
        console.log(value1);
        
        if (value1 == "on") {

            lang.addEventListener('change', selected);
        }

        else {

            lang.removeEventListener('change', selected);
        }
         
        })
        // ++++++++++++++++++++++++



    var form = document.querySelector("form");
    
     form.addEventListener("submit", function (e) {
    // form.addEventListener("keyup", function (e) {
    
        e.preventDefault();

        

        var campoInput = document.querySelector("#nome");
        var campoSurname = document.querySelector("#surname");
        var lang = document.querySelector('#language-choice');



        api[lang.value].personal.data.firstname = campoInput.value;
        api[lang.value].personal.data.surname = campoSurname.value;

        //
        var optionselect = document.querySelector('#selectexperience');
        var value = optionselect.value;
        //

        if (value == "new") {

           // var lang = document.querySelector('#language-choice');
            var jobTitle = document.getElementById('experience');
            var jobDescription = document.getElementById('description');
        
                var obj = {};
                obj.title = jobTitle.value;
                obj.description = jobDescription.value;
           
                api[lang.value].works.data.push(obj);

        }


        else

        {

        var campoExperience = document.querySelector("#experience")
        var campoDescription = document.querySelector("#description")
    
       // var lang = document.querySelector('#language-choice');
    
        api[lang.value].works.data[0].title = campoExperience.value;
        api[lang.value].works.data[0].description = campoDescription.value;


        }
          

        // console.log(api);
        printPersonalInfos(api[lang.value].personal);
        printWorkExperience(api[lang.value].works);

    });
    
    }



// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVV DON'T TOUCH THIS VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

function render(locale) {
    if ({}.hasOwnProperty.call(api, locale)) {
        if ({}.hasOwnProperty.call(api[locale], 'menu')) {
            printMenu(api[locale].menu);
        }

        if ({}.hasOwnProperty.call(api[locale], 'personal')) {
            printPersonalInfos(api[locale].personal);
        }

        if ({}.hasOwnProperty.call(api[locale], 'works')) {
            printWorkExperience(api[locale].works);
        }
    } else {
        alert('Please fill api data with the ' + locale.toUpperCase() + ' object');
    }
}


function selected(e) {
    var value = e.target.value;
    render(value);
}


document.addEventListener("DOMContentLoaded", function (event) {
    var lang = document.querySelector('#language-choice');

    render(lang.value);

    lang.addEventListener('change', selected);


  
  fselect();

  // miafunzione();

  miafunzione();

  SelectOption();

 
});  



    

