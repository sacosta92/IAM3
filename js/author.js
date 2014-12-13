function DOMLoaded() {
    document.addEventListener("deviceready", phonegapLoaded, false);
}
function phonegapLoaded() {

}
function takePicture() {
    navigator.camera.getPicture(onSuccess,onFail,{ quality: 70, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY, encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: true });
}

function takeCamera() {
    navigator.camera.getPicture(onSuccess,onFail,{ quality: 70, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.CAMERA, encodingType: Camera.EncodingType.JPEG});
}







function onSuccess(imageURI) {
    var image = document.getElementById('image');
    image.src = imageURI;
    image.style.display = 'block';
}
function onFail(message) {
    alert('Failed because: ' + message);
}






/*public static final int MEDIA_TYPE_IMAGE = 1;
public static final int MEDIA_TYPE_VIDEO = 2;

* Create a file Uri for saving an image or video 
private static Uri getOutputMediaFileUri(int type){
      return Uri.fromFile(getOutputMediaFile(type));
}*/

/** Create a File for saving an image or video */
/*private static File getOutputMediaFile(int type){
    // To be safe, you should check that the SDCard is mounted
    // using Environment.getExternalStorageState() before doing this.

    File mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(
              Environment.DIRECTORY_PICTURES), "OverlayEditApp");
    // This location works best if you want the created images to be shared
    // between applications and persist after your app has been uninstalled.

    // Create the storage directory if it does not exist
    if (! mediaStorageDir.exists()){
        if (! mediaStorageDir.mkdirs()){
            Log.d("OverlayEditApp", "failed to create directory");
            return null;
        }
    }

    // Create a media file name
    String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
    File mediaFile;
    if (type == MEDIA_TYPE_IMAGE){
        mediaFile = new File(mediaStorageDir.getPath() + File.separator +
        "IMG_"+ timeStamp + ".jpg");
    } 
    } else {
        return null;
    }

    return mediaFile;
}*/