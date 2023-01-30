<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Fusion travel</title>
</head>
<body>
    <header class="site-header">
        <div class="container flex-container">
            <div class="logo">
                <a href="/"><img src="Logo/logo.png" alt="Fusion-Travel-logo"></a>
            </div>
            <nav class="main-nav">
                <ul class="flex-container">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <!--Mobiliems nav-->
            </nav>
        </div>
    </header>
    <section>
        <div class="contact-one">
            <h1>Contact Us!</h1>
            <h3>By hotline</h3>
            <a href="tel.+5162600598">+516 260 0598</a>
            <h3>By email</h3>
            <a href="mailto:travelnow@fusiontravel.com">travelnow@fusiontravel.com</a>
            <h3>...Or visit one of our offices!</h3>
            <a href="maps.google.com">Find one closest to you!</a><br>
            
    </section>
    <section>
<div class="contact-two">
    <h1>Have one of our agents call YOU!</h1>
    <form id="contact" action="post.php" method="post">
        <input type="text" name="name" placeholder="Your name" required autofocus>
        <input type="text" name="lname" placeholder="Your last name" required>
        <input type="email" id="email" placeholder="Your email">
        <input type="tel" name="phone-number" placeholder="Tel. 123456789 " pattern="[0-9]{3}[0-9]{3}[0-9]{3}">
        <textarea placeholder="Your message" name="message" required></textarea>
        <button name="submit" type="submit" id="contact_submit">Submit</button>
    </form>
    </section>
</div>
</body>
</html>