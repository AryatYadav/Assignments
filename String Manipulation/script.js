function processStrings() {
  var string1 = document.getElementById("string1").value;
  var string2 = document.getElementById("string2").value;

  var arr1 = string1.split("");
  var arr2 = string2.split("");

  arr1.reverse();
  arr1 = arr1.concat(arr2);

  var output = 
    "Resulting Array: " +arr1 +"<br>"
    + "Length of the resulting array: " + arr1.length + "<br>Last element of the resulting array: " + arr1[arr1.length - 1];
  document.getElementById("output").innerHTML = output;
}