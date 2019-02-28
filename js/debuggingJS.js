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

var jqxhr = $.ajax({
    type: 'GET',
    url: fullURL,
    processData: true,
    data: {},
    dataType: "json",
    /*
    success: function(data, textStatus, request) {
        console.log(data);
        console.log(textStatus);
        console.log("getting header " + request.getResponseHeader('testHeader'));
    }
    */
});

//this section is executed when the server responds with no error
jqxhr.done(function(){

});

//this section is executed when the server responds with error
jqxhr.fail(function(){

})

//this section is always executed
jqxhr.always(function(){
    console.log("getting header " + jqxhr.getResponseHeader('testHeader'));
});


// document.getElementById("DebugCont").innerHTML = "New text!";