const numbersInput = document.getElementById('numbers');
const processButton = document.getElementById('process');
const resultsDiv = document.getElementById('results');

processButton.addEventListener('click', () => {
    const numbers = numbersInput.value.split(',').map(Number);


    resultsDiv.innerHTML = `
        <p>Original numbers: ${numbers.join(', ')}</p>
        <p>Filtered (Even Numbers): ${numbers
            .filter(number => number % 2 === 0)}</p>
        <p>Mapped (Multiply by 10) : ${numbers
            .filter(number => number % 2 === 0)
            .map(number => number * 10)}  </p>
        <p>Final Result(Sum) : ${numbers
            .filter(number => number % 2 === 0)
            .map(number => number * 10)
            .reduce((sum, number) => sum + number, 0)}</p>
    `;
});