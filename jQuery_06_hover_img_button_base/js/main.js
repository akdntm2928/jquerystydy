$(function() {
    // $("#typo .inner").css("transform", "rotate(45deg)");
    $("#buttons2 .inner button").each(function(i, e) {
        let buttonTop = -40 + (i * 40)
        $(e).css({ top: `${buttonTop}px` })
    })

    $("#buttons2 .inner button").mouseover(function() {
        $(this).find("span img:eq(0)").stop().animate({ opacity: 0 }, 500);
        $(this).find("span img:eq(1)").stop().animate({ opacity: 1 }, 500);
        $(this).stop().animate({
            'backgroundColor': "yellow"
        });
    }).mouseout(function() {
        $(this).find("span img:eq(0)").stop().animate({ opacity: 1 }, 500);
        $(this).find("span img:eq(1)").stop().animate({ opacity: 0 }, 500);
        $(this).stop().animate({
            'backgroundColor': "#fff"
        });
    })


})