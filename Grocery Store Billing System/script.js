const billTable = document.getElementById('bill-table').getElementsByTagName('tbody')[0];
const addItemButton = document.getElementById('add-item-button');
const totalPriceElement = document.getElementById('total-price');


let items = [];

function calculateTotal() {
    let totalPrice = 0;
    let table="";
    items.forEach(item => {
        totalPrice += item.price * item.quantity;
        table+=item.name+": "+item.quantity +" x " +item.price +" = " +"₹" +(item.price*item.quantity).toFixed(2) +"<br>"
      //  console.log(item.name,item.price,item.quantity);
    });
    let discount=totalPrice*0.1;
    total=totalPrice-discount;
    
    document.getElementById('mini').innerHTML = `Subtotal: ₹${totalPrice.toFixed(2)}<br><br>
    Discount (if applicable): ₹ ${discount.toFixed(2)}<br><br>
    <b>Total: ₹${total.toFixed(2)}</b>`;
   
    document.getElementById('total-price').innerHTML =`<b>Bill Summary:</b><br>
        ${table}
        
        <b>Subtotal:</b> ₹${totalPrice.toFixed(2)}<br>
        <b>Discount:</b> ₹${discount.toFixed(2)}<br>
        <b>Total:</b> ₹${total.toFixed(2)}
        `;
    
    
   //console.log(item.name);
    
}

function generateRow(item) {
    const row = billTable.insertRow();
    const itemName = row.insertCell();
    const itemPrice = row.insertCell();
    const itemQuantity = row.insertCell();
    const itemTotalPrice = row.insertCell();
    const actions = row.insertCell();

    itemName.textContent = item.name;
    itemPrice.textContent = item.price;
    itemQuantity.innerHTML = `<input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(this, ${items.indexOf(item)})">`;
    itemTotalPrice.textContent = (item.price * item.quantity).toFixed(2);
    actions.innerHTML = `<button onclick="removeItem(${items.indexOf(item)})">Remove</button>`;
}

function addItem() {
    const itemName = document.getElementById('item').value;
    const itemPrice = parseInt(document.getElementById("price").value);
    const itemQuantity = parseInt(document.getElementById('quantity').value);

    if (itemName && !isNaN(itemPrice) && !isNaN(itemQuantity)) {
        items.push({ name: itemName, price: itemPrice, quantity: itemQuantity });
        generateRow(items[items.length - 1]);
        calculateTotal();
    } else {
        alert("Please enter valid data.");
    }
}

function updateQuantity(input, index) {
    
    items[index].quantity = parseInt(input.value);
    const itemTotalPrice = billTable.rows[index ].cells[3];
    itemTotalPrice.textContent = (items[index].price * items[index].quantity).toFixed(2);
    
    calculateTotal();
}

function removeItem(index) {
    items.splice(index, 1);
    billTable.deleteRow(index + 1);
    calculateTotal();
}

addItemButton.addEventListener('click', addItem);

// Initial items for demo
items.push({ name: "Milk", price: 25, quantity: 2 });
items.push({ name: "Bread", price: 30, quantity: 1 });
items.push({ name: "Eggs", price: 50, quantity: 6 });
items.forEach(generateRow);
calculateTotal();
