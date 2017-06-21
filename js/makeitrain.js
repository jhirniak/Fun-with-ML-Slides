$.fn.makeItRain = function(img, canvasSelector, inventorySize=10){

    $(this).click(function(){
        for (var i = 0; i < inventorySize; i++){
            var random = $(window).width();
            var randomPosition = Math.floor(random*Math.random());
            var randomTime = Math.random() * 20;
            var randomSpeed = (Math.random()*20)+10 ;

            var bills = $("<span class='billsBillsBills'>")
                .css({
                    left : randomPosition,
                    top: '-20em',
                    "-webkit-animation-delay" : randomTime + "s",
                    "-webkit-animation-duration" : randomSpeed + "s"
                });

            $(bills).prepend('<img style="border:0; background: none;" src="' + img + '" alt="Are you missing sum img?">');
            $(canvasSelector).append(bills);
            // $('body').append(bills);
        };
    });
};