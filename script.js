const display = document.getElementById('display');
const resultBox = document.getElementById('result-box');


const append = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = '';
  resultBox.textContent = 'Result: ';
};

const deleteChar = () => {
  display.value = display.value.slice(0, -1);
};

const calculate = () => {
  try {
    let result = eval(display.value);
    display.value = result;
    resultBox.textContent = "Result: " + result;
  } catch {
    display.value = 'Error';
    resultBox.textContent = 'Result: Error';
  }
};


document.getElementById('clear-btn').addEventListener('click', clearDisplay);
document.getElementById('delete-btn').addEventListener('click', deleteChar);
document.getElementById('equal-btn').addEventListener('click', calculate);


document.querySelectorAll('.num-btn').forEach(btn => {
  btn.addEventListener('click', () => append(btn.textContent));
});
