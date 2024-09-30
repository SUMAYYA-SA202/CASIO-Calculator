let display = document.getElementById('display');
let calculation = '';

function updateDisplay(value) {
    calculation += value;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = '';
}

function calculate() {
    try {
        const result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } catch (error) {
        display.value = 'Error';
        calculation = '';
    }
}
