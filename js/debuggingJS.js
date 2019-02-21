var CORSproxy = 'https://cors.io/';
var trefleToken = 'SWVENEduMFMxellqNHFIM3RmL0c4Zz09';
var url       = 'https://trefle.io/api/plants/138738/?token=';
fullURL       = CORSproxy + '?' + url + trefleToken;

$.getJSON(fullURL, function(response){
    console.log(response);
    document.getElementById("DebugCont").innerHTML = response;
});

/*
Http.onreadystatechange=(e)=>{
    document.getElementById("DebugCont").innerHTML = Http.responseText;
}
*/
// document.getElementById("DebugCont").innerHTML = "New text!";