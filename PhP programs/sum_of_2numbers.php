<html>
  <head>
    <title>My php practice...</title>
  </head>
  <body>
    <h1 style="text-align: center;">My php practice...</h1>
    <form method="post">
      <label for="num1">Enter first Number :</label>
      <input type="number" id="num1" name="num1" >
      <br>
      <label for="num2">Enter second Number :</label>
      <input type="number" id="num2" name="num2" >
      <br>
      <button type="submit">Sum </button>
    </form>

 <?php

if($_SERVER["REQUEST_METHOD"]=="POST"){
  $a= $_POST['num1'];
  $b= $_POST['num2'];
  echo "Sum of $a and $b is ".($a+$b) .".";
  }


 ?>
  </body>
</html>