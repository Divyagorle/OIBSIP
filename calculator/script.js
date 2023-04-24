// Get the result input field
const resultField = document.getElementById('result');
const resultField1 = document.getElementById('result1');

// Function to insert a value into the result field
function insertValue(value) {
  resultField.value += value;
}

// Function to clear the result field
function clearResult() {
  resultField.value = '';
  resultField1.value = '';
}

// Function to remove the last character from the result field
function backspace() {
  resultField.value = resultField.value.slice(0, -1);
}

// Function to evaluate the expression in the result field
function calculate() {
  try {
    const result = eval(resultField.value);
    resultField1.value = result;
  } catch (error) {
    alert('Invalid expression');
  }
}