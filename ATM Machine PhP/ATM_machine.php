<?php


    $balance=0;
    $amount=0;
    $a=0;
      while($a!=4)
          {
$a=readline("
Option 1: WithDraw
Option 2: Deposit
Option 3: Check Balance
Option 4: Exit
");

      switch($a){

        case 1:
          $balance=readline("Enter the amount to WithDraw : ");
          $amount=$amount-$balance;
          break;
      case 2:
          $balance=readline("Enter the amount to Deposit : ");
          $amount=$balance+$amount;
          break;
      case 3:
          echo "Your Balance is : $amount";
          break;
      case 4:
          echo "Thankyou for visiting ATM...";
          break;
      }
          }
?>