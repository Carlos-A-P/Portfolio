//=========adding space above id I want href to scroll to with smooth animation

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
});

//=========transparent navbar

// this basically says when user scrolls from the top 10px toggle class
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});