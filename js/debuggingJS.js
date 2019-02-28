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
    
    //this section is executed when the server responds with no error
    jqxhr.done(function(data){
        console.log("getting data " + data);
    });
    
    //this section is executed when the server responds with error
    jqxhr.fail(function(){
        
    });
    
    //this section is always executed
    jqxhr.always(function(){
        console.log(jqxhr);
        console.log("getting header " + jqxhr.getResponseHeader('testHeader'));
    });
}


// document.getElementById("DebugCont").innerHTML = "New text!";