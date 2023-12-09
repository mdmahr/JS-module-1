
function calculateSquareRoot() {

    var userConfirmed = confirm("Should I calculate the square root?");

    if (userConfirmed) {

        var number = prompt("Please enter a number:");
        number = parseFloat(number);

        if (number < 0) {
            document.write("The square root of a negative number is not defined.");
        } else {

            var squareRoot = Math.sqrt(number);
            document.write("The square root of " + number + " is " + squareRoot + ".");
        }
    } else {

        document.write("The square root is not calculated.");
    }
}

calculateSquareRoot();
