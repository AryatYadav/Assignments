function countdown() {
  let counter = parseInt(document.getElementById("startNumber").value);
  
  
  while (counter > 0) {
    document.getElementById("countdown").innerHTML += counter + "<br>";
    counter--;
  }
}