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

let client = AgoraRTC.createElement({
    node: 'rtc',
    codec = 'vp8',
});

client.init('appIdHere');

client.join(null ,'any-channel' ,  null, (uid)=>{
    let localStream = AgoraRTC.createStream({
        video: true,
        audio: true
    });

    localStream.init(()=>{
        localStream.play('me');
        client.publish(localStream , handleFail);
    }, handleFail);
} , handleFail);

client.on('stream-added' , function(evt){
    client.subcribe(evt.stream , handleFail);
});

client.on('stream-subscribed' , function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    addVideoStream(streamId);
    stream.play(streamId);
});

client.on('stream-removed' ,function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close;
    removeVideoStream(streamId);
} );


client.on('peer-leave' , function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close;
    removeVideoStream(streamId);
} );


