// Typing effect
document.addEventListener("DOMContentLoaded", () => {
  const typingText = "Temperature Converter";
  const typingEl = document.querySelector(".typing");
  let i = 0;

  function type() {
    if (i < typingText.length) {
      typingEl.textContent += typingText.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
});

function convert() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const resultBox = document.getElementById("result");
  let result = "";

  if (isNaN(temp)) {
    result = "Please enter a valid number.";
  } else {
    switch (unit) {
      case "celsius":
        result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F<br>Kelvin: ${(temp + 273.15).toFixed(2)} K`;
        break;
      case "fahrenheit":
        result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C<br>Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
        break;
      case "kelvin":
        result = `Celsius: ${(temp - 273.15).toFixed(2)} °C<br>Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
        break;
    }
  }

  resultBox.innerHTML = result;
  resultBox.style.animation = 'none'; // Reset
  void resultBox.offsetWidth; // Trigger reflow
  resultBox.style.animation = 'popUp 0.5s ease-in-out';
}
