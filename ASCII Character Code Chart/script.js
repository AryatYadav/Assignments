
const tableBody = document.querySelector('tbody');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Create table rows for ASCII characters
for (let i = 0; i <= 255; i++) {
  const row = tableBody.insertRow();
  const charCell = row.insertCell();
  const decCell = row.insertCell();
  const hexCell = row.insertCell();
  const binCell = row.insertCell();

  charCell.textContent = String.fromCharCode(i);
  decCell.textContent = i;
  hexCell.textContent = i.toString(16).toUpperCase();
  binCell.textContent = i.toString(2).padStart(8, '0');
}

// Handle search input
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const rows = tableBody.querySelectorAll('tr');

  rows.forEach(row => {
    const charCell = row.cells[0];
    const decCell = row.cells[1];

    if (searchTerm === charCell.textContent || searchTerm === decCell.textContent) {
      row.classList.add('highlight');
      let charCode = charCell.textContent;
      let decCode = decCell.textContent;
      let hexCode = row.cells[2].textContent;
      let binCode = row.cells[3].textContent;
      alert(`Character: ${charCode}\nDecimal: ${decCode}\nHexadecimal: ${hexCode}\nBinary: ${binCode}`);
    } else {
      row.classList.remove('highlight');
    }
  });
});

// Handle hover effect
tableBody.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'TD') {
    const row = event.target.parentNode;
    row.classList.add('highlight');
  }
});

tableBody.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'TD') {
    const row = event.target.parentNode;
    row.classList.remove('highlight');
  }
});