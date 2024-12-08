<html>
  <head>
    <title>Scholarship and Grade...</title>
  </head>
<body>
  <form method="POST">
    <label for="Marks">Enter your Marks</label>
    <input type="number" name="marks" id="marks">
    <br>
    <button type="submit">Submit</button>
  </form>
<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
      $marks = $_POST["marks"];

      switch ($marks) {
        case $marks >= 90 && $marks <= 100:
          echo "Grade: A <br> Scholarship: 100%";
          break;
        case $marks >= 80 && $marks <= 89:
          echo "Grade: B <br> Scholarship: 75%";
          break;
        case $marks >= 70 && $marks <= 79:
          echo "Grade: C <br> Scholarship: 50%";
          break;
        case $marks >= 60 && $marks <= 69:
          echo "Grade: D <br> Scholarship: 25%";
          break;
        default:
          echo "Grade: F No Scholarship";
      }

    }


?>
</body>
</html>