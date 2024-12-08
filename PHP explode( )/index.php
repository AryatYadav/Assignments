<?php
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $username = explode('@', $email)[0];
    echo "$username";
}
?>