$(document).ready(function () {
    var total = 0;
    $('.add1').click(function () {
        total = total + 1;
        $('.score').text(total);
    });
    $('.add2').click(function () {
        total = total + 2;
        $('.score').text(total);
    });
    $('.add3').click(function () {
        total = total + 3;
        $('.score').text(total);
    });
    $('.reset').click(function () {
        total = 0;
        $('.score').text(total);
    });
    $('.sub1').click(function () {
        total = total - 1;
        $('.score').text(total);
    });
    
$('header ul li a').hover(function(){
    $('.mega-menu').slideDown();
})function(){
    $('.mega-menu').slideUp();
});
    
});
