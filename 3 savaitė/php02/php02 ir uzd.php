<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>1 uzduotis</h3>
    <?php
    //     function Stačiakampio_plotas($a, $b) {
    //         $plotas = $a * $b;
    //         return $plotas;
    //     }
    // $atsakymas = Stačiakampio_plotas(5, 3);
    // echo "Atsakymas: $atsakymas";
    ?>


    <h3>2 uzduotis</h3>
    <!-- <form name="Stačiakampio_plotas" action="uzd2" action="hide" method="get">
        Kraštinė a: <input type="number" name="kraštinė_a"><br>
        Kraštinė b: <input type="number" name="kraštinė_b"><br>
        <button type="submit" class="pateikti">Pateikti</button>
    </form> -->

     <?php
    // if(isset($_GET['kraštinė_a']) . isset($_GET['kraštinė_b']))
      ?>

<h3>3 uzduotis</h3>



<h3>4 uzduotis</h3>

<?php
    class žmogus {
       public $vardas;
       public $pavardė = 'Antoškė';
       public $pasisveikinimas = 'rankos paspaudimas';
       
       public function duomenys() {
            return '<b>Vardas</b> - ' . $this -> vardas . ',<b> Pavardė</b> - '. $this -> pavardė . ',<b> Pasisveikinimo būdas</b> - ' . $this -> pasisveikinimas . ';<br>';
        }
    }

    $kristijonas = new žmogus();
    $mikalojus = new žmogus();

    $kristijonas -> vardas = 'Kristijonas';
    $kristijonas -> pavardė = 'Donelaitis';
    $kristijonas -> pasisveikinimas = 'rankos paspaudimas';
    
    $mikalojus -> vardas = 'Mikalojus';
    $mikalojus -> pavardė = 'čiurlionis';
    $mikalojus -> pasisveikinimas = 'duoda penkis';

    echo $kristijonas -> duomenys();
    echo $mikalojus -> duomenys();
?>

<h3>5 uzduotis</h3>

<?php

    function copymetai(){
    if(2016 < date('Y')){
        echo "&copy; ", 2016, '-', date('Y');
    }else {
        echo "&copy; ", date('Y');
    }
}
echo copymetai();
?>
   
</html>