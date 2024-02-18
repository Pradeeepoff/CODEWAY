document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("result");
  
    function appendToInput(value) {
      display.value += value;
    }
  
    function clearInput() {
      display.value = "";
    }
  
    function calculate() {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    }
  
    document.querySelectorAll("#calculator button").forEach(button => {
      button.addEventListener("click", function() {
        const value = this.textContent;
        if (value === "=") {
          calculate();
        } else if (value === "C") {
          clearInput();
        } else if (value === "Del") {
          display.value = display.value.slice(0, -1); // Deletes the last character
        } else {
          appendToInput(value);
        }
      });
    });
});
