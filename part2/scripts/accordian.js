var init = function() {
    $('p').hide();
    
    $('ul li:nth-child(1) h1').click(function(){
        $('span').html(" + ");
        $('ul li:nth-child(1) h1 span').html(" - ");
        $('h1').removeClass("highlight");
        $(this).addClass("highlight");
        $('p').hide();
        $('ul li:nth-child(1) p').show();
    });
    
    $('ul li:nth-child(2) h1').click(function(){
        $('span').html(" + ");
        $('ul li:nth-child(2) h1 span').html(" - ");
        $('h1').removeClass("highlight");
        $(this).addClass("highlight");
        $('p').hide();
        $('ul li:nth-child(2) p').show();
    });
    
    $('ul li:nth-child(3) h1').click(function(){
        $('span').html(" + ");
        $('ul li:nth-child(3) h1 span').html(" - ");
        $('h1').removeClass("highlight");
        $(this).addClass("highlight");
        $('p').hide();
        $('ul li:nth-child(3) p').show();
    });
};

$(document).ready(init);