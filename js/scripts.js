$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
});
$('#carouselButton').click(function(){
    if ($('#carouselButton').children('span').hasClass('fa-pause')){
        $('#mycarousel').carousel('pause')
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
    } 
    else if ($('#carouselButton').children('span').hasClass('fa-play')){
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
    }
})
$('#reserve-button').click(function(){
    $('#reserve-table').modal('show');
});
$('#cancel-button').click(function(){
    $('#reserve-table').modal('hide');
});
$('#cross-button-reserve').click(function(){
    $('#reserve-table').modal('hide');
});
$('#login-button').click(function(){
    $('#login-modal').modal('show');
});
$('#cross-button-login').click(function(){
    $('#login-modal').modal('hide');
});
$('#cancel-button-login').click(function(){
    $('#login-modal').modal('hide');
});