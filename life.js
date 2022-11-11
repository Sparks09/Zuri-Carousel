var carousel = $(".carousel"),
    currdeg = 0,
    current = 0;

$(".next").on("click", {d: "n"}, rotate);
$(".prev").on("click", {d: "p"}, rotate);

function rotate(e) {

    $(carousel.find('.active')).removeClass('active');
    if (e.data.d == "n") {
        currdeg = currdeg - 120;  
        current = (current + 1) % carousel.find('.item').length;
    }
    
    if (e.data.d == "p") {
        currdeg = currdeg + 120;
        current = (current - 1 + carousel.find('.item').length) % carousel.find('.item').length;

    }
    
    $(carousel.find('.item')[current]).addClass('active');
    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      "transform": "rotateY(" + currdeg + "deg)"
    }); 
}