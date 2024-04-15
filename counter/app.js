let counterValue = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counterElement.textContent = counterValue;
}

// increase
function increase() {
    counterValue++;
    updateCounter();
}

// decrease
function decrease() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

// reset 
function reset() {
    counterValue = 0;
    updateCounter();
}