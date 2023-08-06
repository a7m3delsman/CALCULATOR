function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculate() {
    try {
        var result = eval(displayValue);
      } catch(e) {
        if(e instanceof SyntaxError) {
          document.getElementById("display").value = "Invalid syntax";  
        } else if (e.message.includes("divide by zero")) {
          document.getElementById("display").value = "Cannot divide by zero. Please enter a non-zero divisor.";
        } else {
          document.getElementById("display").value = "An error occurred";  
        }
      }
    var displayValue = document.getElementById("display").value;
    var result = eval(displayValue);
    document.getElementById("display").value = result;
  }
  function deleteLastCharacter() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
  }
  function changeSign() {
    var displayValue = document.getElementById("display").value;
    if (displayValue !== "") {
      if (displayValue.charAt(0) === "-") {
        document.getElementById("display").value = displayValue.substr(1);
      } else {
        document.getElementById("display").value = "-" + displayValue;
      }
    }
  }
  function calculateSquareRoot() {
    playClickSound();
    var displayValue = document.getElementById("display").value;
    var number = parseFloat(displayValue);
    if (!isNaN(number)) {
      var result = Math.sqrt(number);
      document.getElementById("display").value = result;
      history.push("√(" + number + ") = " + result);
    } else {
      document.getElementById("display").value = "Invalid Input";
    }
  }
  
  
  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
