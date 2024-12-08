<?php
// Input two strings from the user
$string1 = $_POST["string1"];
$string2 = $_POST["string2"];

echo "<h1>Anslysis Result</h1> <br>";
// Check if one string is present in the other
if (strpos($string2, $string1) !== false) {
    echo "$string1 is present in $string2.<br>";
} else {
    echo "$string1 is not present in $string2.<br>";
}

// Compare the two strings
if ($string1 === $string2) {
    echo "The strings are identical.<br>";
} else {
    echo "The strings are not identical.<br>";
}
?>

