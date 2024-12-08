<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fullName = $_POST["fullName"];
  $nameParts = explode(" ", $fullName);
  $totalChars = 0;
  
  foreach ($nameParts as $part) {
    $totalChars += strlen($part);
  }
  echo "<h1>Analisis Result:</h1> <br>";
  echo "Split words: " .join(", ",$nameParts) . "<br>";
  echo "Total number of Characters (excluding spaces): " . $totalChars;
} 
?>

