//jshint esversion:6

exports.getdate = function() {
    var today = new Date;
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);

    return day;
}

exports.getday = function() {
    var today = new Date;
    var options = {
        weekday: "long",
    };

    var day = today.toLocaleDateString("en-US", options);

    return day;
}

// isme humne ek date naam se file bnaayi isme 2 function h which can be accessed by using . method
// jaise date.getdate will give date and date.getday will give day.