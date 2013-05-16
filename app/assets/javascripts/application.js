// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


function show_page(nav, page){
    $('.page.active').hide();
    $('#' + page).show();
        $('.page').removeClass('active');
    $('#' + page).addClass('active');
    $('.nav li').removeClass('active');
    $(nav).addClass('active');
    banner_image_cycle($('#' + page), 0);
}

var bannerCycleId = 0;
var bannerTimeout = 0;
var bannerInterval = 5000;
function banner_image_cycle(sl, cycleId){

    if (cycleId>0) {
        if (cycleId != bannerCycleId) return false
    }else{
        cycleId = bannerCycleId = parseInt(Math.random()*10000);
        bannerTimeout = setTimeout(function(){banner_image_cycle(sl, cycleId); return}, bannerInterval);
        return false;
    }

    clearTimeout(bannerTimeout)
    var eles = sl.find('img.banner.cycle');
    if (!eles.length>0) return false;

    var ele = eles.first();
    var imgs = $.parseJSON(ele.attr('best'));
    idx = ($.inArray(ele.attr('src'), imgs)+1) % imgs.length;
    var src = imgs[idx];
    if (ele.attr('src') != src) {
        var cloned = ele.clone();
        cloned.hide().attr('src', src).css({
            'width':'100%',
            'height':'auto',
        });
        ele.before(cloned);
        cloned.load(function(){
            cloned.show();
            ele.css({
                'position':'absolute',
                'top':0,
                'left':0
            }).fadeOut(1500, function(){
                eles.remove();
                bannerTimeout = setTimeout(function(){banner_image_cycle(sl, cycleId); return}, bannerInterval);
            });
        });
    }
    return true;
}
