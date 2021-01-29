function calculator(value){
    var display = document.getElementById('result');
    display.value = display.value + value;
}

function result() {
    var display = document.getElementById('result').value;
    document.getElementById('result').value = eval(display);
}

function clearDisplay() {
    document.getElementById('result').value = null;
}