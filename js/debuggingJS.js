/*
TREFLE API examples:

get 1st page & request header
https://trefle.io/api/plants/?token=SWVENEduMFMxellqNHFIM3RmL0c4Zz09

browse all plants by page
https://trefle.io/api/plants/?page=4906&token=SWVENEduMFMxellqNHFIM3RmL0c4Zz09

browse a specific plant
http://trefle.io/api/plants/138738/?token=SWVENEduMFMxellqNHFIM3RmL0c4Zz09
*/

const CORSproxy   = 'https://cors.io/';
const trefleToken = '/?token=SWVENEduMFMxellqNHFIM3RmL0c4Zz09';
const url         = 'https://trefle.io/api/plants';
fullURL           = CORSproxy + '?' + url + trefleToken;
console.log(fullURL);

/*
$.getJSON(fullURL, function(response){
    console.log(response);
    document.getElementById("resText").innerHTML = JSON.stringify(response);
});
*/
function makeAjaxCall(urlTo){
    var jqxhr = $.ajax({
        type: 'GET',
        url: urlTo,
        processData: true,
        data: {},
        dataType: "json"
    });
    var plant;
    
    //this section is executed when the server responds with no error
    jqxhr.done(function(){
        
    });
    
    //this section is executed when the server responds with error
    jqxhr.fail(function(){
        
    });
    
    //this section is always executed
    jqxhr.always(function(){
        console.log(jqxhr);
        //console.log(jqxhr.responseJSON);
        
        plant = JSON.parse(jqxhr.responseText);
        
        //plant = jqxhr.responseJSON;
    });
    return(plant);
}

/*
console.log(jqxhr.getResponseHeader('link'));
console.log(jqxhr.getResponseHeader('page-number'));
console.log(jqxhr.getResponseHeader('per-page'));
console.log(jqxhr.getResponseHeader('total'));
console.log(jqxhr.getResponseHeader('total-pages'));
        
link        : Provides links to the first, next, previous and last pages.
page-number : The current page number.
per-page    : The current number of items per page.
total       : The total number of items.
total-pages : The number of pages.
*/

var plantCollection = makeAjaxCall(fullURL)

console.log(plantCollection);
//document.getElementById("DebugCont").innerHTML = JSON.stringify(plant);