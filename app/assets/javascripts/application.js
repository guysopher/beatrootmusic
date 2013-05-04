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
    $('.page').slideUp();
    $('#' + page).slideDown();
    $('.nav li').removeClass('active');
    $(nav).addClass('active');
}

var coverCycleId = 0;
var coverCycleMomentId = 0;
var coverTimeout = 0;
function cover_image_cycle(sl, cycleId){

    if (cycleId != coverCycleId) return false
    clearTimeout(coverTimeout)

    var doCycle = true;
    var eles = sl.children();
    $(eles).each(function(){
        if (!doCycle) return true;
        if ($(this).is(':visible')){
            $(this).fadeOut();
            coverTimeout = setTimeout(function(){cover_image_cycle(sl, cycleId); return}, 2000);
            doCycle = false;
            return true;
        }
    });
    if (!doCycle) return true;
    $(eles).fadeIn();
    coverTimeout = setTimeout(function(){cover_image_cycle(sl, cycleId); return}, 2000);
    return true;

//    var ele = eles.first();
//    var imgs = $.parseJSON(sl.attr('imgs'));
//    idx = ($.inArray(ele.attr('src'), imgs)+1) % imgs.length;
//    var src = imgs[idx];
//    if (ele.attr('src') != src) {
//        var cloned = ele.clone();
//        cloned.hide().attr('src', src).css('width','auto').css('height','auto');
//        ele.before(cloned);
//        cloned.load(function(){
//            cloned.show();
//            ele.fadeOut(1000, function(){
//                eles.remove();
//                coverTimeout = setTimeout(function(){cover_image_cycle(sl, cycleId); return}, 2000);
//            });
//        });
//    }
//    return true;
}

