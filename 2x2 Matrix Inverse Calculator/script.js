function calculateInverse() {
  // Get the matrix elements from the user input
  var a1 = prompt("Enter row 1 of the matrix (comma-separated values):").split(",");
  var b1 = prompt("Enter row 2 of the matrix (comma-separated values):").split(",");
  var a=a1[0];
  var b=a1[1];
  var c=b1[0];
  var d=b1[1];

  var determinant = (a * d) - (b * c);

  // Check if the determinant is zero (matrix is not invertible)
  if (determinant === 0) {
    alert("The matrix is not invertible.");
    return;
  }

  // Calculate the inverse matrix
  var inverseA = d / determinant;
  var inverseB = -b / determinant;
  var inverseC = -c / determinant;
  var inverseD = a / determinant;

  // Display the original and inverse matrices
  alert("Original Matrix:\n" +
        "[" + a + " " + b + "]\n" +
        "[" + c + " " + d + "]\n\n");
  alert("Inverse Matrix:\n" +
        "[" + inverseA + " " + inverseB + "]\n" +
        "[" + inverseC + " " + inverseD + "]");
}