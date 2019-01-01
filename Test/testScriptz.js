$(document).ready(function() {
    $("#btn1").on("click", function() {
        jqAjax();
    });
});

function jqAjax() {
    var formInputs = $("input[type='text']");
    var data = {};
    for (var key in formInputs) {
        formInputs.hasOwnProperty(key)
            ? (data[key] = formInputs[key].value)
            : console.log("Error");
    }
    console.log(data);
    $.ajax({
        type: "GET",
        url: "test.php",
        data: data,
        success: function(data, textStatus, jqXHR) {
            // console.log(data);
            var x = JSON.parse(data);
            $("table tr:not(:first)").remove();
            for (var key in x) {
                $("table").append("<tr>");
                for (var det in x[key]) {
                    $("table tr:last-child").append("<th>" + x[key][det]);
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

    //   $.getJSON("url", data, function(data, textStatus, jqXHR) {});
}
