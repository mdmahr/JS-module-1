// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false; // 0 and 1 are not prime numbers
    if (number <= 3) return true; // 2 and 3 are prime numbers

    // If the number is divisible by 2 or 3, it's not prime
    if (number % 2 === 0 || number % 3 === 0) return false;

    // Check for divisors from 5 to the square root of the number
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

// Function to prompt the user and print the result
function checkPrime() {
    // Ask the user for a number
    var userNumber = prompt("Enter an integer:");
    userNumber = parseInt(userNumber, 10); // Parse the number

    // Check if the number is prime and print the result
    if (isPrime(userNumber)) {
        document.write(userNumber + " is a prime number.");
    } else {
        document.write(userNumber + " is not a prime number.");
    }
}

// Call the function
checkPrime();
