/**
 * @name handleFail
 * @param err - error thrown by any function
 * @description Helper function to handle errors
 */

 let handleFail = function(err){
    console.log("Error : ", err);
 };

 // Queries the container in which the remote feeds belong
 let remoteContainer = document.getElementById("remote-container");
/**
 * @name addVideoStream
 * @param elementId is the name of the element that is to be inserted into the DOM
 * @description Helper function to add the video stream to "remote-container"
 */
function addVideoStream(elementId){
    let streamDiv=document.createElement("div"); //create new div for every
    streamDiv.id=elementId;                      // Assiging id to div
    streamDiv.style.transform="rotateY(180)";    // Takes care of literal i
    remoteContainer.appendChild(streamDiv);      // add new div container
}

/**
 * @name removeVideoStream
 * @param elementId is the name of the element that is to be removed into the DOM
 * @description Helper function to remove the video stream from "remove-container";
 */
function removeVideoStream(elementId){
    let remDiv = document.getElementById(elementId);
    if(remDiv) remDiv.parentNode.removeChild(remDiv);
}

