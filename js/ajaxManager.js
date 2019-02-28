var plantCollection = [];

function manageAjaxResponse(responseJSON) {
    
    for (var i = 0; i < responseJSON.length; i++) {
        plantCollection.push(responseJSON[i]);
    }

}