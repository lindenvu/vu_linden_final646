var init = function () {
    "use strict";

    $('#i2, #i3, #i4, #i5').hide();
    $('#a1').addClass("highlight");
    
    $('#a1').click(function(){
        $('#i2, #i3, #i4, #i5').fadeOut();
        $('#i1').fadeIn();
        $('#a1').addClass("highlight");
        $('#a2, #a3, #a4, #a5').removeClass("highlight");
    });
    
    $('#a2').click(function(){
        $('#i1, #i3, #i4, #i5').fadeOut();
        $('#i2').fadeIn();
        $('#a2').addClass("highlight");
        $('#a1, #a3, #a4, #a5').removeClass("highlight");
    });
    
    $('#a3').click(function(){
        $('#i2, #i1, #i4, #i5').fadeOut();
        $('#i3').fadeIn();
        $('#a3').addClass("highlight");
        $('#a2, #a1, #a4, #a5').removeClass("highlight");
    });

    $('#a4').click(function(){
        $('#i2, #i3, #i1, #i5').fadeOut();
        $('#i4').fadeIn();
        $('#a4').addClass("highlight");
        $('#a2, #a3, #a1, #a5').removeClass("highlight");
    });
    
    $('#a5').click(function(){
        $('#i2, #i3, #i4, #i1').fadeOut();
        $('#i5').fadeIn();
        $('#a5').addClass("highlight");
        $('#a2, #a3, #a4, #a1').removeClass("highlight");
    });
};