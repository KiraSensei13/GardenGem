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

$.ajax({
    type: 'GET',
    url: fullURL,
    processData: true,
    data: {},
    dataType: "json",
    success: function(data, textStatus, request) {
        console.log(data);
        console.log(textStatus);
        console.log(request.responseText);
        console.log(request.responseXML);
        console.log(request.getResponseHeader());
        console.log(request.getAllResponseHeader());
    }
});


/*function reqListener () {
        var responseHeader = JSON.parse(this.getResponseHeader);
        console.log(responseHeader);
        document.getElementById("resHeader").innerHTML = JSON.stringify(responseHeader);

        var responseContent = JSON.parse(this.responseText);
        console.log(responseContent);
        document.getElementById("resText").innerHTML = JSON.stringify(responseContent);
}

var Http = new XMLHttpRequest();
Http.onreadystatechange = function() {
    //if (this.readyState == 4 && this.status == 200) {};
    xhttp.addEventListener("load", reqListener);
    xhttp.open("GET", fullURL, true);
    xhttp.send('');
};*/

// document.getElementById("DebugCont").innerHTML = "New text!";