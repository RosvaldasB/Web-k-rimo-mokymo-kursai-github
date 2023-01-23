<?php
    setcookie("name", "Valdas Adamkus", time()+3600, "/","", 0);
    setcookie("age", "92", time()+3600, "/", "", 0);
?>

<!DOCTYPE html>
<html lang="en">
<head>

<title>Sausainiai, nes noriu rasyti lietuviskai</title>

</head>
<body>
    <?php
        if(isset($_COOKIE["name"])) {
            echo 'Welcome, ' . $_COOKIE["name"] . '<br>';
            echo 'You are ' . $_COOKIE["age"] . ' years old.';
        } else {
            echo "Who are you?";
        }
    ?>
</body>
</html>