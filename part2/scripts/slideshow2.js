var init = function () {
    "use strict";
    
    $('#a1, #a2, #a3, #a4, #a5').css({
        "list-style-type": "none",
        "display": "inline-block",
        "width": "20px",
        "padding": "10px",
        "align-content": "center",
        "font-size": "2em",
        "color":"blue",

    });
    
    $('#a1').css({
        "color":"purple",
        "text-decoration": "underline"
    });
    
    var unhighlight = {
        "color":"blue",
        "text-decoration": "none"
    }
    
    var highlight = {
        "color":"purple",
        "text-decoration": "underline"
    }
    
    
    $('#i2, #i3, #i4, #i5').hide();
    $('#a1').addClass("highlight");
    
    $('#a1').click(function(){
        $('#i2, #i3, #i4, #i5').fadeOut();
        $('#i1').delay(1000).fadeIn();
        $('#a1').css(highlight);
        $('#a2, #a3, #a4, #a5').css(unhighlight);
    });
    
    $('#a2').click(function(){
        $('#i1, #i3, #i4, #i5').fadeOut();
        $('#i2').delay(1000).fadeIn();
        $('#a2').css(highlight);
        $('#a1, #a3, #a4, #a5').css(unhighlight);
    });
    
    $('#a3').click(function(){
        $('#i2, #i1, #i4, #i5').fadeOut();
        $('#i3').delay(1000).fadeIn();
        $('#a3').css(highlight);
        $('#a2, #a1, #a4, #a5').css(unhighlight);
    });

    $('#a4').click(function(){
        $('#i2, #i3, #i1, #i5').fadeOut();
        $('#i4').delay(1000).fadeIn();
        $('#a4').css(highlight);
        $('#a2, #a3, #a1, #a5').css(unhighlight);
    });
    
    $('#a5').click(function(){
        $('#i2, #i3, #i4, #i1').fadeOut();
        $('#i5').delay(1000).fadeIn();
        $('#a5').css(highlight);
        $('#a2, #a3, #a4, #a1').css(unhighlight);
    });
};