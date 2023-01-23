<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php> <h3>4 uzduotis</h3> <?>

    <?php $cities = ['Berlynas', 'Roma', 'Londonas'];?>
    <?php print_r($cities);?> <br>
    <?php echo '<ul>'; ?>
    <?php echo '<li>' .  $cities[1] . '</li>';?>
    <?php echo '</ul>'; ?>

    <?php $cities[] = 'Tokijas';?>
    <?php print_r($cities);?><br>

    <?php $cities2 = [
        'tokijas'=> 13.6,
        'vasingtonas'=> 0.6,
        'maskva' => 11.5
    ];?>
    <?php print_r($cities2);?> <br>


    <?php $cities2[] = 'londonas';?>
    <?php $cities2 = [
        'tokijas'=> 13.6,
        'vasingtonas'=> 0.6,
        'maskva' => 11.5,
        'londonas' => 8.6
    ];?>
    <?php print_r($cities2);?><br>

    <?php echo '<ul>'; ?>
    <?php echo '<li>'. '"Gyventojų skaičius: ' .  $cities2['tokijas'] . ' mln."' . '</li>';?>
    <?php echo '<li>'. '"Gyventojų skaičius: ' .  $cities2['vasingtonas'] . ' mln."' . '</li>';?>
    <?php echo '<li>'. '"Gyventojų skaičius: ' .  $cities2['maskva'] . ' mln."' . '</li>';?>
    <?php echo '<li>'. '"Gyventojų skaičius: ' . $cities2['londonas'] . ' mln."' . '</li>';?>
    <?php echo '</ul>'; ?>

    <?php> <h3>5 uzduotis</h3> <?>

    <?php $cities3 = [
    "Tokijas" => [13.6, 1868, "Japonija"],
    "Vasingtonas" =>  [0.6, 1790, "JAV"],
    "Maskva" => [11.5, 1147, "Rusija"]
    ]; ?>
    <?php print_r($cities3); ?>

    <?php $cities3 = [
    "Tokijas" => [13.6, 1868, "Japonija"],
    "Vasingtonas" =>  [0.6, 1790, "JAV"],
    "Maskva" => [11.5, 1147, "Rusija"],
    "Londonas" => [8.6, 43, "Anglija"]
    ]; ?>
    <?php print_r($cities3); ?>

    <?php echo '<ul>'; ?>
    <?php echo '<li>'. 'Gyventojų skaičius: ' .  $cities3["Londonas"][0] . ' mln.' . '</li>';?>
    <?php echo '<li>'. 'Įkurtas: ' .  $cities3["Londonas"][1] . ' m.' . '</li>';?>
    <?php echo '<li>'. 'Šalis: ' .  $cities3["Londonas"][2] . '</li>';?>
    <?php echo '</ul>'; ?>

    <?php> <h3>6 uzduotis</h3> <?>

    <?php $metai = 1774; 
    if($metai >= $cities3["Vasingtonas"][1]){
        echo "Vašingtonas yra JAV sostinė.";
    }elseif($metai = 1774){
        echo "JAV sostinė vis dar Filadelfijoje.";
    } else {
        $liko = $cities3["Vasingtonas"][1] - $metai;
        echo "Liko ", $liko, "iki Vašingtono įkūrimo.";
    }
    ?>

    <?php> <h3>7 uzduotis</h3> <?>
    <?php
    $cities4 = ['Tokijas', 'Vašingtonas', 'Maskva', 'Londonas'];
    ?>
    <?php> </ul> <?> 
    <?php
    for($i = 1; $i < count($cities4); $i++) {
        echo "<li>$cities4[$i]</li>";
    }
    ?>
    <?php></ul><?>
    
    <?php echo "Masyvo elementu kiekis - ", count($cities4); ?>

    <?php> <h3>8 uzduotis</h3> <?>
    <?php
    $temp = [4, 3, 9, 19, 19, 9, 12, 20, 24, 20, 12, 14, 18, 21, 20, 23, 16, 16, 15, 19, 19, 17, 17, 15, 12, 13, 13, 15, 19, 21];
    ?>

<!-- var suma = 0;
for(let i = 0; i < masyvas.length; i++) {
    suma += masyvas[i];
} -->
    <?php
    $suma = 0;
    for($i = 0; $i < count($temp); $i++) {
        $suma += $temp[$i];
    };
    echo "Vidurkis - ", round($suma / count($temp))?> <br>
    <?php
    foreach($temp as $skc){
        echo $skc, " ";
    };
    $tempeil = implode($skc);
    echo implode($skc)
    ?>
</body>
</html>