// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to find and print leap years in a given range
function printLeapYears() {
    // Ask the user for start and end years
    var startYear = prompt("Enter the start year:");
    var endYear = prompt("Enter the end year:");

    // Parse the input to integers
    startYear = parseInt(startYear, 10);
    endYear = parseInt(endYear, 10);

    // Start the unordered list
    var leapYearsHtml = "<ul>";

    // Loop through the years and find leap years
    for (var year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYearsHtml += "<li>" + year + "</li>";
        }
    }

    // Close the unordered list
    leapYearsHtml += "</ul>";

    // Print the list of leap years to the HTML document
    document.write(leapYearsHtml);
}

// Call the function
printLeapYears();
