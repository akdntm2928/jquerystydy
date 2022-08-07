$(function() {
    $("h1").css({ "color": "blue" })
        // $("#typo .inner").css("text-decoration", "underline");
        // $("#typo .inner").css("border-bottom", "5px solid red");
        // $("#typo .inner").css("transform", "rotate(45deg)");
        // $("#typo .inner").css("opacity", 0.5);
        // $("#typo  .inner").css({
        //     textDecoration: "underline",
        //     borderBottom: "5px solid red",
        //     transform: "rotate(45deg)",
        //     opacity: "0.5"
        // });

    // 1 단계
    // 실해 시점 제어 - event 종류 - mouseover 마우스가 올라왔을떄.
    // $("#typo").on("mouseover", function() {
    //         $(this).css({ background: "green" })
    //     }).on("mouseout", function() {
    //         $(this).css({ background: "#3498db" })
    //     }) // chain메서드
    // 2 단계
    $("#typo ,h1").mouseover(function() {
            $(this).css({ background: "green" })
        }).mouseout(function() {
            $(this).css({ background: "#3498db" })
        }) // chain메서드
        // 3 단계
})