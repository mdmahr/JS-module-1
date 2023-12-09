
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

var userYear = prompt("Please enter a year:");

if (isLeapYear(userYear)) {
    document.write(userYear + " is a leap year.");
} else {
    document.write(userYear + " is not a leap year.");
}