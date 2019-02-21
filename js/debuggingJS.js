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
const trefleToken = 'SWVENEduMFMxellqNHFIM3RmL0c4Zz09';
const url         = 'https://trefle.io/api/plants/?token=';
fullURL           = CORSproxy + '?' + url + trefleToken;

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