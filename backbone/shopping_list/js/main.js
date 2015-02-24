$(document).ready(function() {

    $.ajax({
        url: "data.json",
        async: false,
        dataType: "json",
        success: function(json) {

            $.each(json.data , function(key, val) {

                var contextFromTemplate = $('#myTemplate').html();
                var processedTemplate = _.template(contextFromTemplate, {
                    name : val.name,
                    age : val.age
                });


                $("#myData").append(processedTemplate);
            })
        }
    });

});
