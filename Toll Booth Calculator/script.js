const tollForm = document.getElementById('toll-form');
const resultDiv = document.getElementById('result');

tollForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const vehicleType = document.getElementById('vehicle-type').value;
    let toll = calculateToll(vehicleType);

    displayResult(toll);
});

function calculateToll(vehicleType) {
    switch (vehicleType) {
        case 'car':
            return 5;
        case 'truck':
            return 10;
        case 'motorcycle':
            return 3;
        default:
            return null; // Should not occur
    }
}
let a=document.getElementById("emergency")

function displayResult(toll) {
    if (a.checked == true) {
        resultDiv.textContent = "The toll to be paid  is $0";
    } else {
        resultDiv.textContent = `The toll to be paid  is $${toll}.`;
    }
}
