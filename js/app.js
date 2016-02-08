$(document).foundation();

$(document).ready(function() {
    $( ".color-box" ).blur(function() {
        var idOfColor = $(this).attr('id').split("-");
        var newRed = $('#red-'+idOfColor[1]).val();
        var newGreen = $('#green-'+idOfColor[1]).val();
        var newBlue = $('#blue-'+idOfColor[1]).val();
        if ((newRed).trim().length == 0) {newRed = 0;}
        if ((newGreen).trim().length == 0) {newGreen = 0;}
        if ((newBlue).trim().length == 0) {newBlue = 0;}
        $('.check-color-'+idOfColor[1]).css("color","rgb("+newRed+","+newGreen+","+newBlue+")");
    });
});
