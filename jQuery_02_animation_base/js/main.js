$(function() {
    $("#typo .inner").click(function() {
        // 선택 .animate({속성:값, 속성:값}, 시간, 이징, 다른할일);
        // easing: linear, swing
        //function (){ 실제 할일}; 임의함수(익명함수)
        $(this).stop().animate({ opacite: 0, fontSize: "0px" }, 1500, "easeInOutElastic", function() {
            $(this).animate({ opacite: 1, fontSize: "110px" }, 500)
        });
    })
});