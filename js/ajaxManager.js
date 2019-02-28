var plantCollection = [];

function manageAjaxResponse(responseJSON) {
    plantCollection.push(responseJSON);
    
    console.log(plantCollection);
}