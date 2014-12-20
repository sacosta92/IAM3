function DOMLoaded() {
    document.addEventListener("deviceready", phonegapLoaded, false);
}
function phonegapLoaded() {

}
// function takePicture() {
//     navigator.camera.getPicture(onSuccess,onFail,{ quality: 70, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY, encodingType: Camera.EncodingType.JPEG,
//         saveToPhotoAlbum: true });
// }

// function takeCamera() {
//     navigator.camera.getPicture(onSuccess,onFail,{ quality: 70, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.CAMERA, encodingType: Camera.EncodingType.JPEG});
// }

// function onSuccess(imageURI) {
//     var image = document.getElementById('image');
//     image.src = imageURI;
//     image.style.display = 'block';
// }
// function onFail(message) {
//     alert('Failed because: ' + message);
// }

function takeCamera(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}


function uploadPhoto(data){
// this is where you would send the image file to server

	image.src = "data:image/jpeg;base64," + data;
	// Successful upload to the server
	navigator.notification.alert(
		'Your Photo has been uploaded',  // message
		okay,                           // callback
	    'Photo Uploaded',              // title
	    'OK'                          // buttonName
	);

	// upload has failed Fail

	/* 

	if (failedToUpload){

	navigator.notification.alert(
		'Your Photo has failed to upload',
		failedDismissed,
	    'Photo Not Uploaded',
	    'OK'
		);

	} 
	*/


}

function okay(){
	// Do something
}














