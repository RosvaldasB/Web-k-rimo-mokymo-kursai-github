<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        class Car {
            public $bakas;
            public function degaluKiekis($litrai){
                $this -> bakas += $litrai;
                return $this;
            }
            public function atstumas($km){
                $litrai = $km * 0.06;
                $this -> bakas -= $litrai;
                return $this;
            }
        }

        $golf = new Car();

        $likutis = $golf -> degaluKiekis(40) -> atstumas(46) -> bakas;
        echo 'bake bus likę: ' . $likutis . 'L';
    ?>

    <p>&copy; <?php echo date('Y'); ?>. Visos teisės saugomos.</p>
<br>
    <?php 
        $data1 = new DateTime();
        $data2 = new DateTime();

        $losangeles = new DateTimeZone ('America/Los_Angeles');
        $vilnius = new DateTimeZone('Europe/Vilnius');

        $data1 -> setTimezone($losangeles);
        $data2 -> setTimezone($vilnius);

        echo 'Laikas Los Andžele '. $data1 -> format('g:ia, l, F j, Y') . '<br>';
        echo 'Laikas Vilniuje '. $data2 -> format('g:ia, l, F j, Y') . '<br>';
    ?>


<?php 
        $data3 = new DateTime();
        $data4 = new DateTime();

        $paris = new DateTimeZone ('Europe/Paris');
        $manila = new DateTimeZone('Asia/Manila');

        $data3 -> setTimezone($paris);
        $data4 -> setTimezone($manila);

        echo 'Laikas Paryžiuje '. $data3 -> format('g:ia, l, F j, Y') . '<br>';
        echo 'Laikas Maniloje '. $data4 -> format('g:ia, l, F j, Y') . '<br>';
    ?>

</body>
</html>

//Paris
//Manila