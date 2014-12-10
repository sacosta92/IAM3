$(document).ready(function(){
	//stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });
	





    // this.el.on('click', '.change-pic-btn', this.changePicture);

    // this.changePicture = function(event) {
    // event.preventDefault();
    // this.el.on('click', '.change-pic-btn', this.changePicture);
    // if (!navigator.camera) {
    //     app.showAlert("Camera API not supported", "Error");
    //     return;
    // }
    // var options =   {   quality: 50,
    //                     destinationType: Camera.DestinationType.DATA_URL,
    //                     sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
    //                     encodingType: 0     // 0=JPG 1=PNG
    //                 };
 
    // navigator.camera.getPicture(
    //     function(imageData) {
    //         $('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
    //     },
    //     function() {
    //         app.showAlert('Error taking picture', 'Error');
    //     },
    //     options);
 
    //     return false;
    // };

function capturePhoto(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}
function uploadPhoto(data){
// this is where you would send the image file to server

    cameraPic.src = "data:image/jpeg;base64," + data;
    // Successful upload to the server
    navigator.notification.alert(
        'Your Photo has been uploaded',  // message
        okay,                           // callback
        'Photo Uploaded',              // title
        'OK'                          // buttonName
    );

    // upload has failed Fail

     

    if (failedToUpload){

    navigator.notification.alert(
        'Your Photo has failed to upload',
        failedDismissed,
        'Photo Not Uploaded',
        'OK'
        );

    } 
    


}


}); /*here ends the doc ready*/