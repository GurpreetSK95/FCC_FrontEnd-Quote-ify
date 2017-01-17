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
            });
    });
    $('.share_button').on("click", function () {
        window.open('http://twitter.com/share?text=' + $(".quote").html() + $(".author").html());
    });

});