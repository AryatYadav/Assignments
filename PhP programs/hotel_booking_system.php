<html>
  <head>
    <title>Hotel Booking System...</title>
  </head>
<body>
  <form method="post">
  <h1 style="text-align: center;">Hotel Booking System...</h1>
  <label for="room">Select room type :</label>
  <select name="room" id="room">
    <option value="Standard">Standard Room ($100 per night)</option>
    <option value="Deluxe">Deluxe ($150 per night)</option>
    <option value="Suite">Suite ($200 per night)</option>
  </select>
    <br>
    <label for="days">Enter days for booking :</label>
    <input type="number" name="days" id="days">
    <br>
    <button type="submit">Submit</button>
  </form>
<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
      $type= $_POST['room'];
      $days= $_POST['days'];
      $price=0;
      if($type=="Standard")
      {
        $price= $days*100;
      }
      if($type=="Deluxe")
      {
        $price= $days*150;
      }
      if($type=="Suite")
      {
        $price= $days*200;
      }


      if($days<3)
      {
        echo "Your total amount is \$$price for $days days.";
      }

      if($days>=3 && $days<=6)
      {
        $price= $price-($price*.1);
        echo "Your total amount is \$$price for $days days.";
      }


      if($days>=7)
      {
        $price= $price-($price*.2);
        echo "Your total amount is \$$price for $days days.";
      }
    }


?>
</body>
</html>