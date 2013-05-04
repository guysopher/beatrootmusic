//twitter api
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

//facebook api
(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));

$(function(){
    wWidth = $(window).width();
    wHeight = $(window).height();

    bHeight = $('#banner').height();
    bWidth = $('#banner').width();

    sHeight = $('#sidebar').height();

    resize();
});

$(window).scroll(function(e){
    var h = Math.max(0, (bHeight - $(window).scrollTop()));
    var p = Math.min(bHeight, $(window).scrollTop());
    $('#banner').css({
        'height' : h,
        'margin-top' : p + 10
    });
});

function resize(){
    var w = bWidth - 400 - 10;
    $('#content').css({
        'width' : w,
        'min-height' : sHeight
    });
    $('#content .nav li').css({
        'width' : ((w-10) / ($('#content .nav li').length)) - 2,
    });
}
$(window).resize(function(e){
    resize();
});

$(window).scroll(function() {
    $(".logo").css({
        "-webkit-transform": "rotate(" + ($(this).scrollTop() / -10) + "deg)",
        "-moz-transform": "rotate(" + ($(this).scrollTop() / -10) + "deg)"
    });
});

$(function(){
//    $('#banner').unslider();
//    coverCycleId = Math.random();
//    cover_image_cycle($('div#banner'), coverCycleId);
});
