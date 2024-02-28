<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timetables</title>
    <link rel="stylesheet" href="darsh.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlTt..."/>
<link rel="stylesheet" href="font awesome/css/all.css">
    <!--cdn link -->
</head>
<body>
    <div class="container">
        <nav>
            <ul>
                <li>
                    <a href="#" class="logo">
                        <img src="Screenshot 2024-01-18 161009.png">
                        <span class="nav-item">DOS</span>
                    </a> 
                </li>
                <li><a href="dashboard.php">
                    <i class=" fas fa-menorah"></i>
                    <span class="nav-item">Darshboard</span>

                </a></li>
                <li><a href="timetables.php">
                    <i class=" fas fa-table"></i>
                    <span class="nav-item">Time Table </span>

                </a></li>
                <li><a href="login.php">
                    <i class=" fas fa-sign-out-alt"></i>
                    <span class="nav-item">Login</span>

               
                <li><a href="aboutus.php">
                    <i class=" fas fa-comment"></i>
                    <span class="nav-item">About Us</span>

                </a></li>
                <li><a href="#" class="logout">
                    <i class=" fas fa-sign-out-alt"></i>
                    <span class="nav-item">Log out</span>

                </a></li>
            </ul>
        </nav>



        <section class="main">
            <div class="main-top">
                <h1>TIME TABLE GENERATOR</h1>
                <i class="fas fa-user-cog"></i>
            </div>
  
            <section class="Attendance">
            <div id="noTimetablesYetNotice" style="width: 400px; height: 250px; margin-left: 600px; text-align: center; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background: linear-gradient(45deg, #c7ecc7, #a3d8a3, #7bc67b, #4caf50); background-size: 400% 400%; animation: gradientAnimation 8s infinite alternate; border-radius: 15px; color: #333;">

<b style="font-size: 20px;">No timetables generated yet!</b>

<a href="data-editorial.php" style="text-decoration: none; display: inline-block; padding: 10px 20px; background-color: #fff; color: #4CAF50; border: 2px solid #4CAF50; border-radius: 10px; font-size: 16px; margin-top: 20px;">Generate New One</a>
</div>

<style>
@keyframes gradientAnimation {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>
            </section>
        </section>
    </div>
    <script type="module" src="./timetables.js"></script>
</body>
</html>