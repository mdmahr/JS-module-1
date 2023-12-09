// Function to roll a die and return the result
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

// Function to simulate rolling dice and calculate the probability of a specific sum
function calculateDiceSumProbability() {
    // Ask the user for the number of dice and the target sum
    var numberOfDice = parseInt(prompt("Enter the number of dice:"), 10);
    var targetSum = parseInt(prompt("Enter the sum of the eyes you're interested in:"), 10);

    var occurrences = 0; // Initialize the count of how many times the target sum occurs
    var simulations = 10000; // Number of simulations

    // Simulate rolling the dice
    for (var i = 0; i < simulations; i++) {
        var sum = 0; // Initialize sum for this simulation
        // Roll the dice and sum the results
        for (var j = 0; j < numberOfDice; j++) {
            sum += rollDie();
        }
        // If the sum of this simulation is the target sum, increment the occurrence count
        if (sum === targetSum) {
            occurrences++;
        }
    }

    // Calculate the probability as a percentage
    var probability = (occurrences / simulations) * 100;

    // Print the result to the HTML document with two decimal places
    document.write("Probability to get sum " + targetSum + " with " + numberOfDice +
                   " dice is " + probability.toFixed(2) + "%");
}

// Call the function
calculateDiceSumProbability();
