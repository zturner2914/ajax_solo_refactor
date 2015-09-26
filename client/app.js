$(function(){
    $.ajax({
        url:"/getColors"
    }).done(function(response) {
        //console to see if anything works
        console.log(response);

        for(var it = 0; it < response.length; it++) {
            var myContent = $("<div style='background:" + response[it].value + "'><p>" + response[it].color + "</p></div>");
            $('.content-placeholder').append(myContent);
        }

    });

    });