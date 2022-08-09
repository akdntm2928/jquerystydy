$(function() {

    var container = $(".slideshow"),
        slideGroup = container.find(".slidesshow_slides"),
        slides = slideGroup.find("a"),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.indicator'),
        slideCount = slides.length,
        indicatorHtml = "",
        currentIndex = 0,
        duration = 500,
        easing = 'easeInOutExpo',
        interval = 3500,
        timer;

    slides.each(function(e, i) {

        $(this).css({
            "left": e * 100 + "%"
        })
        indicatorHtml += "<a href = ''>" + (i + 1) + " < /a>";
    })

    indicator.html(indicatorHtml);


    function goToSlide(index) {

        slideGroup.animate({ left: -100 * index + "%" }, duration, easing)
        currentIndex = index
        updateNav();

        indicator.find('a').removeClass('active');
        indicator.find('a').eq(currentIndex).addClass('active')

    }

    function updateNav() {
        var navPrev = nav.find('.prev');
        var navNext = nav.find('.next');
        if (currentIndex == 0) {
            navPrev.addClass("disabled")
        } else {
            navPrev.removeClass("disabled")
        }

        if (currentIndex >= slideCount - 1) {
            navNext.addClass("disabled")
        } else {
            navNext.removeClass("disabled")
        }

    }
    indicator.find('a').click(function(e) {
        e.preventDefault();
        var idx = $(this).index();

        goToSlide(idx);
    })

    nav.find('a').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('prev')) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex + 1);
        }

    })
    goToSlide(0);


    function startTimer() {
        timer = setInterval(function() {
            var nextIndex = (currentIndex + 1) % slideCount
            goToSlide(nextIndex);
        }, interval);
    }
    startTimer();

    function stopTimer() {
        clearInterval(timer)
    }

    container.mouseover(function() {
        stopTimer();
    }).mouseout(function() {
        startTimer();
    })
});