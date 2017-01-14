/**
 * Created by gurpreet on 14/01/17.
 */

$(document).ready(function () {
    $("div").on("click", function () {
        //TODO: issue in api
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json",
            function (json) {
                var quote = json.quote;
                var author = json.author;
                $(".quote").html(quote);
                $(".author").html("- " + author);
                // var color = colors[Math.floor(Math.random() * 15) + 1];
                // $("body").css("background", color);
                // $("div").css("background", color);
            });
    });
    $('.share_button').on("click", function () {
        window.open('http://twitter.com/share?text=' + $(".quote").html() + $(".author").html());
    });

});