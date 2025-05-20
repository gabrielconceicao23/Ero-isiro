let result = "0";

function appendToResult(value) {
  if (result === "0" || result === "Error") {
    result = value;
  } else {
    result += value;
  }
  document.getElementById("result").value = result;
}

function clearResult() {
  result = "0";
  document.getElementById("result").value = result;
}

function calculateResult() {
  try {
    result = Function('"use strict";return (' + result + ')')();
  } catch (error) {
    result = "Error";
  }
  document.getElementById("result").value = result;
}
