function calculatePrice() {
  const originalPrice = parseFloat(document.getElementById("originalPrice").value);
  const discountAmount = parseFloat(document.getElementById("discountAmount").value);
  const taxRate = parseFloat(document.getElementById("taxRate").value);

  const discountedPrice = (originalPrice - discountAmount);
  const finalPrice = originalPrice + (discountedPrice * (taxRate / 100));

  document.getElementById("finalPrice").innerHTML = `
  <h2>Calculation Result:</h2>
  Original Price: $ ${originalPrice.toFixed(2)}<br>
  Discounted Price: $ ${discountAmount.toFixed(2)}<br>
  The final price of the item is: $ ${finalPrice.toFixed(2)} <br>
  `;
}