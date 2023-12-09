        var userName = prompt("Please enter your name:");
        if (userName) {
            document.getElementById("greeting").innerHTML = `Hello, ${userName}!`;
        } else {
            document.getElementById("greeting").innerHTML = "Hello there!";
        }