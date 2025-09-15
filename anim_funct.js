//CONTROL ANIMATION FUNCTION
const ball = document.getElementById("ball");
    
    function play() {
        ball.style.animationPlayState = "running";
    }
    function pause() {
        ball.style.animationPlayState = "paused";
    } 
    
//GLOBAL AND LOCAL FUNCTION 

// Global variable
 let globalVar = "I am a global variable!";

 // Function to demonstrate local scope
 function showLocal() {
     let localVar = "I am a local variable!";
     document.getElementById("output").innerText = localVar; 
 }

 // Function to show global variable
 function showGlobal() {
    document.getElementById("output").innerText = globalVar;
 }

 // Event listeners for buttons
 document.getElementById("show-global").addEventListener("click", showGlobal);
 document.getElementById("show-local").addEventListener("click", showLocal);


 //CALCULATING FUNCTION
document.getElementById("calculate-btn").addEventListener("click", calculate);

function calculate() {
    // Get input values
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);

    // Check if inputs are valid numbers
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    // Perform calculation (e.g., addition)
    const sum = input1 + input2;

    // Display result
    document.getElementById("result").innerText = `Result: ${sum}`;
}


