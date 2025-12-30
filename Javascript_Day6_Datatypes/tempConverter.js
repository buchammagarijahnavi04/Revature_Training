function c2f() {
  let celsius = document.getElementById("celsius").value;

  if (celsius === "") {
    alert("Please enter Celsius value");
    return;
  }

  let fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function f2c() {
  let fahrenheit = document.getElementById("fahrenheit").value;

  if (fahrenheit === "") {
    alert("Please enter Fahrenheit value");
    return;
  }

  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsius").value = celsius.toFixed(2);
}
