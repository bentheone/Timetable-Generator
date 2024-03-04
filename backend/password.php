<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stytles.css">
        <title> Enter password - TT Generator</title>
        <link rel="stylesheet" href="Task/font owesome/css/all.css">
    </head>
    <body>
        <div class="wrapper">
        <nav class="nav">
        <div class="nav-logo">
            <p><span>Time</span>table<span>Generator </span></p>
        </div>
       
        <div class="nav-menu-btn">
            <i class="fa-solid fa-bars" onclick="myMenuFunction()"></i>
        </div>
        </nav>
        <!---------------form box--------->
        <div class="form-box">



<!------------login form---------->
<div class="login-container" id="login">
    <div class="nav-logo">
        <p>Input your password !</p>
    </div>
    <form action="loginOp.php" method="post">
    <div class="input-box">
        <input type="password" class="input-field" placeholder="password" name="password"required>
        <i class="fa-solid fa-lock"></i> 
    </div>
    
    <div class="input-box">
        <a href="#"><input type="submit" class="submit" value="Login" name="submit"></a>
    </div>
    </form>
    </div>
</div>
</div>
</body>
</html>