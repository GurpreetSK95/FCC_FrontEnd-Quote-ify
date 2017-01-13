/**
 * Created by gurpreet on 14/01/17.
 */

$(document).ready(function () {
   $("#quote_button").on("click", function () {
       //TODO: issue in api
       $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
       function (json) {
           // var content = val[0].content;
           // var title = val[0].title;
           $(".quote").html(JSON.stringify(json));
       });
   });
});