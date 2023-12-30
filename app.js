// Get the textview element
var textview = document.form.textview;

// Function to insert a value into the textview
function insert(value) {
    textview.value = textview.value + value;
}

// Function to clear the textview
function clearText() {
    textview.value = '';
}

// Function to handle backspace
function backspace() {
    textview.value = textview.value.slice(0, -1);
}

// Function to evaluate the expression in the textview
function calculate() {
    try {
        textview.value = eval(textview.value);
    } catch (error) {
        textview.value = 'Error';
    }
}
