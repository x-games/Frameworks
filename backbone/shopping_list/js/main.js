$(document).ready(function() {

    $.ajax({
        url: "data.json",
        async: false,
        dataType: "json",
        success: function(json) {
            // Step 2 : Create a loop for N-number of data
            $.each(json.data , function(key, val) {
                // Step 3 : Add data to template
                var contextFromTemplate = $('#myTemplate').html();
                var processedTemplate = _.template(contextFromTemplate, {
                    name : val.name,
                    age : val.age
                });

                // Step 4 : Append content of filled template to the div "myData"
                $("#myData").append(processedTemplate);
            })
        }
    });

});
