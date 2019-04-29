$(document).ready(function(){
    $('.main_nav > nav > ul > li:eq(1)').click(function(){
    open();
    });

$('.main_btna').click(function(){
    open(); 
 
});

$('.main_btn').click(function(){
    open(); 
});
$('.close').click(function(){
    close();
});

function open(){
    $('.overlay').show("slow", function(){
        $('.modal').slideDown('slow');
    });
}

function close(){
    $('.modal').slideUp("slow", function(){
        $('.overlay').hide('slow');
    });
}


});