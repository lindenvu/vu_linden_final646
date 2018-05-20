var init = function() {
    $('#d2, #d3').hide();
    $('ul li:nth-child(1)').addClass("highlight");
    
    $('ul li:nth-child(1)').on("click mouseover", function(){
        $('ul li').removeClass("highlight");
        $('ul li:nth-child(1)').addClass("highlight");
        $('#d1').show();
        $('#d2, #d3').hide();
    });
    
    $('ul li:nth-child(2)').on("click mouseover", function(){
        $('ul li').removeClass("highlight");
        $('ul li:nth-child(2)').addClass("highlight");
        $('#d2').show();
        $('#d1, #d3').hide();
    });
    
    $('ul li:nth-child(3)').on("click mouseover", function(){
        $('ul li').removeClass("highlight");
        $('ul li:nth-child(3)').addClass("highlight");
        $('#d3').show();
        $('#d2, #d1').hide();
    });
};

$(document).ready(init);