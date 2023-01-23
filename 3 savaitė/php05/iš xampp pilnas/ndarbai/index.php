<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/forma/style.css" rel="Stylesheet">
    <title>Forma</title>
</head>
<body>
    <header>
        <div class="container">
            <img src="/forma/popup-logo.png" alt="logo">
        </div>
    </header> 
    <main>
            <div class="container">
            <form id="contact" action="forma.php" method="post">
                <h3>Bendraukime</h3>
                <h4>Susisiekite su mumis šiandien!</h4>
                <p><input type="text" name="vardas" placeholder="Jūsų vardas" required autofocus></p>
                <p><input type="email" name="email" placeholder="Jūsų el. pašto adresas" required></p>
                <p><textarea name="message" placeholder="Jūsų žinutė" required></textarea></p>
                <p><button name="Submit" type="submit" id="contact-submit">Siųsti</button></p>
        </form>
        </div>
    </main>
    <footer>
        <div class="container">
            <p class="copyright">&copy; 2018. Visos teisės saugomos.</p>
        </div>
    </footer>
</body>
</html>