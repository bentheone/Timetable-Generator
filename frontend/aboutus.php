<?php 
session_start();
if(!isset($_SESSION['username'])){
    header('Location:login.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="about.css">
    <title>About Us - TimetableGenerator</title>
</head>
     <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

    <header>
        <body>
        <h1>About TimetableGen</h1>
    </header>

   

    <section class="main-content">
        
        <h2>Welcome to TimetableGenerator</h2>
        <p>TimetableGen is a cutting-edge solution for effortless timetable creation and management. Our mission is to simplify scheduling processes, saving time and increasing efficiency for educational institutions, businesses, and organizations.</p>

        <h3>Who We Are</h3>
        <p>Established in [year], TimetableGen has become a leading provider of timetable management solutions. Our team consists of dedicated professionals with expertise in software development, education, and business management.</p>

        <h3>Our Timetable Generator</h3>
        <p>Our innovative timetable generator is designed to meet the diverse needs of our users. With user-friendly interfaces and powerful features, TimetableGen enables seamless scheduling, reducing the complexities associated with timetable creation and adjustments.</p>

        <h3>Why Choose TimetableGenerator?</h3>
        <ul>
            <li>Efficiency: Save time with our automated timetable creation process.</li>
            <li>Flexibility: Easily adapt to changes with our user-friendly interface.</li>
            <li>Reliability: Depend on our robust system for accurate and error-free timetables.</li>
        </ul>

        <!-- Add more sections as needed -->
       

    </section>
    <a href="darshtt.html" class="back-button">Back</a>
    <script>
        function goBack() {
            window.history.back();
        }
    </script>
 
    

    <footer>
        <p>© 2024 TimetableGenerator. All rights reserved.</p>
    </footer>

</body>
</html>
