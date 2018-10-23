// change attribute for navbar when scrolling
$(window).scroll(function() {
    $('nav').toggleClass('bg-light', $(this).scrollTop() > 110);
    $('.navbar-brand').toggleClass('text-dark', $(this).scrollTop() > 110);
    $('.nav-link').toggleClass('text-dark', $(this).scrollTop() > 110)
})