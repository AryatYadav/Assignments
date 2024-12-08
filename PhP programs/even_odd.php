<html>
  <head>
    <title>My php practice...</title>
  </head>
  <body>
    <h1 style="text-align: center;">Find Even Odd numbers...</h1>
    <form method="post">
      <label for="num1">Enter Number :</label>
      <input type="number" id="num1" name="num1" >
            <button type="submit">Result </button>
    </form>

 <?php
if(isset($_POST['num1']))
{
 $a=$_POST['num1'];
   if($a%2==0){
      echo "<h1>Even Number </h1>";
   }
   else{
       echo "<h1>Odd Number </h1>";
   }
}
?>