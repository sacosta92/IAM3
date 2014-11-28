$(document).ready(function(){
	//stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
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
    // camera 
/*function capturePhoto(){
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
    
}*/
}); /*here ends the doc ready*/