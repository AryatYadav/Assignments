<!DOCTYPE html>
<html>
<head>
  <title>Movie Ticket Booking</title>
</head>
<body>
  <h1>Movie Ticket Booking</h1>
  <form method="post">
    <label for="age">Age:</label>
    <input type="number" name="age" id="age" required><br><br>
    <label for="tickets">Number of Tickets:</label>
    <input type="number" name="tickets" id="tickets" required><br><br>
    <input type="submit" value="Book Tickets">
  </form>
  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = $_POST["age"];
    $tickets = $_POST["tickets"];

    if ($age < 0) {
      echo "Invalid age. Age cannot be negative.";
    } else if ($tickets <= 0) {
      echo "Invalid number of tickets. Number of tickets must be greater than 0.";
    } else {
      $ticketPrice = 15;
      $totalCost = $ticketPrice * $tickets;

      if ($age <= 12) {
        $discount = $totalCost * 0.5;
        $totalCost -= $discount;
        echo "You are eligible for a 50% discount for children.<br>";
      } else if ($age >= 60) {
        $discount = $totalCost * 0.3;
        $totalCost -= $discount;
        echo "You are eligible for a 30% discount for seniors.<br>";
      }

      echo "Total cost: $" . $totalCost;
    }
  }
  ?>
</body>
</html>