var url='http://cors.io/?https://trefle.io/api/plants/138738/?token=SWVENEduMFMxellqNHFIM3RmL0c4Zz09';

$.getJSON(url, function(response){
    console.log(response);
    document.getElementById("DebugCont").innerHTML = response;
});

/*
Http.onreadystatechange=(e)=>{
    document.getElementById("DebugCont").innerHTML = Http.responseText;
}
*/
// document.getElementById("DebugCont").innerHTML = "New text!";