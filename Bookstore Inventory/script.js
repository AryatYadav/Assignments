let books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", quantity: 8 },
    { title: "1984", author: "George Orwell", quantity: 5 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", quantity: 2 },
    { title: "Moby-Dick", author: "Herman Melville", quantity: 3 }
];

// Function to display the inventory in the table
function displayInventory() {
  const inventoryTable = document.getElementById('inventory-table').getElementsByTagName('tbody')[0];
  inventoryTable.innerHTML = ''; 

  books.forEach(book => {
      const row = inventoryTable.insertRow();
      const titleCell = row.insertCell();
      const authorCell = row.insertCell();
      const quantityCell = row.insertCell();
      const actionsCell = row.insertCell();

      titleCell.innerHTML = book.title;
      authorCell.innerHTML = book.author;
      quantityCell.innerHTML = book.quantity;

      const total = books.reduce((sum, book) => sum + book.quantity, 0);
      document.getElementById('total-books').innerHTML= "<h3>Total Books in stock:</h3> "+total;
     
      actionsCell.innerHTML = `
           
          <button class="delete-book" data-book-index="${books.indexOf(book)}">Delete</button>
      `;
  });
}


function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (title === '' || author === '' || isNaN(quantity)) {
      alert('Please fill in all fields correctly.');
      return;
  }

  books.push({ title: title, author: author, quantity: quantity });
  displayInventory();
  clearForm();
}


function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('quantity').value = '';
}

function deleteBook(index) {
  
      books.splice(index, 1);
      displayInventory();
  
}


document.getElementById('add-book').addEventListener('click', addBook);

// Event delegation for update and delete buttons
document.getElementById('inventory-table').addEventListener('click', function(event) {
 
   if (event.target.classList.contains('delete-book')) {
      const index = parseInt(event.target.dataset.bookIndex);
      deleteBook(index);
  }
});

// Initial display of inventory
displayInventory();