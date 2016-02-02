$(document).ready(function () {

    function play(max) {

        for (var counter = 1; counter <= max; counter++) {
            if (counter % 15 == 0) {
                var row = "<li>FizzBuzz</li>";
            } else if (counter % 3 == 0) {
                var row = "<li>Fizz</li>";
            } else if (counter % 5 == 0) {
                var row = "<li>Buzz</li>";
            } else {
                var row = "<li>" + counter + "</li>";
            }
            $('#results').append(row);
        }
    }

    $('#calculate').on('click', function () {
        var maxNumber = parseInt($('#fizzbuzzinput').val());
        // console.log(maxNumber);
        //validate here
        if (isNaN(maxNumber)) {
            alert('Please add a number greater than zero.')
        } else {
            play(maxNumber);
        }

    });
});
