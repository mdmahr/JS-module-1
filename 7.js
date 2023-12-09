// Function to roll a die and return the result
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

// Function to roll dice multiple times and sum the results
function rollDiceAndSum() {
    // Ask the user for the number of dice rolls
    var numberOfRolls = prompt("How many dice would you like to roll?");
    numberOfRolls = parseInt(numberOfRolls); // Convert the input to an integer

    var sum = 0; // Initialize sum of dice rolls

    // Roll the die the specified number of times
    for (var i = 0; i < numberOfRolls; i++) {
        sum += rollDie(); // Add the result of each roll to the sum
    }

    // Print the sum of the dice rolls
    console.log("The sum of the dice rolls is: " + sum);
    document.write("The sum of the dice rolls is: " + sum);
}

// Call the function
rollDiceAndSum();
