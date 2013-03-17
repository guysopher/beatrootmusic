//twitter api
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

//facebook api
(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));

$(function(){
    wWidth = $(window).width();
    wHeight = $(window).height();
    $('#twitter').html('<a style="margin:10px 0;" class="twitter-timeline" data-dnt="true" width="' + parseInt((wWidth*0.3)) + '" height="' + parseInt((wWidth*0.5)) + '" href="https://twitter.com/BeatrootNews" data-widget-id="302822508762107904">Tweets by @BeatrootNews</a>');
    $('#facebook').html('<div style="margin:10px 0;" class="fb-like-box" data-href="http://www.facebook.com/beatrootofficial" data-height="' + parseInt((wWidth*0.5)) + '" data-width="' + parseInt((wWidth*0.3)) + '" data-show-faces="true" data-colorscheme="dark" data-stream="true" data-header="true"></div>');
});
