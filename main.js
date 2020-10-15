var content = document.getElementById('content');
var card = document.getElementById('card');

for(var i = 0; i<20; i++)
{
    content.appendChild(card.cloneNode(true));
}

$('.dropdown-toggle').click((e) => {
    $(e.target).children('.dropdown-content-wrapper').toggleClass('show');
    $(e.target).siblings('.dropdown-content-wrapper').toggleClass('show');

    $(e.target).children('.fas').toggleClass('fa-rotate-180');
});

$('.dropdown-toggle').focusout((e) => {
    $(e.target).children('.dropdown-content-wrapper').removeClass('show');
    $(e.target).siblings('.dropdown-content-wrapper').removeClass('show');

    $(e.target).children('.fas').removeClass('fa-rotate-180');
});

$('.navbar-toggle').click((e) => {
    var toggler = $('.navbar-toggle');
    var navItems = $('.navbar-items');

    if(toggler.hasClass('rotate-0')){
        toggler.removeClass('rotate-0').addClass('rotate-90');
        navItems.removeClass('hide').addClass('show');
    }
    else{
        toggler.removeClass('rotate-90').addClass('rotate-0');
        navItems.removeClass('show').addClass('hide');
    }
});

$('.fa-bookmark').mouseenter((e) => {
    $(e.target).toggleClass('far').toggleClass('fas');
});

$('.fa-bookmark').mouseleave((e) => {
    $(e.target).toggleClass('far').toggleClass('fas');
});