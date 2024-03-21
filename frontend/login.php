<?php 
include '../backend/loginOp.php';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stytles.css">
        <title>LoginTT - Generator</title>
        <script>
    function hideMessage() {
      setTimeout(function() {
        document.getElementById('error-message').style.display = 'none';
      }, 1500);
    }
        </script>
        <link rel="stylesheet" href="Task/font owesome/css/all.css">
    </head>
    <body onload="hideMessage()">
        <div class="wrapper">
        <nav class="nav">
        <div class="nav-logo">
            <h2 class="paragraph"><span>Time</span>table<span>Generator </span></h2>
        </div>
        
        
        <div class="nav-menu-btn">
            <i class="fa-solid fa-bars" onclick="myMenuFunction()"></i>
        </div>
        </nav>
        <div class="form-box">



<div class="login-container" id="login">
    <div class="nav-logo">
        <h2 class="paragraph">Login Now!</h2>
    </div>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" onsubmit="return validateForm()">
    <div class="input-box">
        <input type="username" class="input-field" placeholder="username" name="username"required>
        <i class="fa-regular fa-user"></i> 
    </div><br>
    <div class="input-box">
        <input type="password" class="input-field" placeholder="password" name="password"required>
        <i class="fa-solid fa-lock"></i>
    </div>
    <div style="margin: 5px;">
        <?php if ($errMsg): ?>
    <p style="color: red;" id="error-message"><?php echo $errMsg; ?></p>
        <?php endif; ?>

    </div><br>
    
    
    <div class="input-box">
        <a href="#"><input type="submit" class="submit" value="Next" style= 'background: rgb(116, 202, 76);'></a>
    </div>
    </form>
    </div>
</div>






                       
        <script>
           function myMenuFunction() {
            var i = document.getElementById("navMenu");

            if(i.className === "nav-menu"){
                i.className += " responsive";
            } else{
                i.className = "nav-menu";
            }
           } 
        </script>
        <script>
            var a = document.getElementById("loginBtn");
            var b = document.getElementById("registerBtn");
            var x = document.getElementById("login");
            var y = document.getElementById("register");

            function login(){
                x.style.left = "4px";
                y.style.right = "-520px";
                a.className += " white-btn ";
                b.className = " btn ";
                x.style.opacity = 1;
                y.style.opacity = 0;

            }
            function register(){
                x.style.left = "-510px";
                y.style.right = "5px";
                a.className = " btn ";
                b.className += " white-btn ";
                x.style.opacity = 0;
                y.style.opacity = 1;
            }


        
    function validateForm() {
        var username = document.getElementsByName("username")[0].value;
        var password = document.getElementsByName("password")[0].value;
        var errorMessage = document.getElementById("error-message");

        // Your validation logic here
        if (username === "" || password === "") {
            errorMessage.style.color = "red";
            errorMessage.innerText = "Please fill in all fields.";
            return false; // Prevent form submission
        }

        

        
        return true;
    }
    

    
</script>



    </body> 
</html>