function DOMLoaded() {
    document.addEventListener("deviceready", phonegapLoaded, false);
}
function phonegapLoaded() {

}
function takePicture() {
    navigator.camera.getPicture(onSuccess,onFail,{ quality: 70, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY, encodingType: Camera.EncodingType.JPEG});
}
function onSuccess(imageURI) {
    var image = document.getElementById('image');
    image.src = imageURI;
    image.style.display = 'block';
}
function onFail(message) {
    alert('Failed because: ' + message);
}
function() {
	private void galleryAddPic() {
	    Intent mediaScanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
	    File f = new File(mCurrentPhotoPath);
	    Uri contentUri = Uri.fromFile(f);
	    mediaScanIntent.setData(contentUri);
	    this.sendBroadcast(mediaScanIntent);
	}
}
