<?php
session_start();
include './dbcon.php';
$errMsg = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['password']) && isset($_POST['username'])) {
  $username=mysqli_real_escape_string($conn,$_POST['username']);
  $psw=mysqli_real_escape_string($conn,$_POST['password']);
  $sql="SELECT * FROM users WHERE username='$username' and password='$psw'";
  $result = mysqli_query($conn, $sql);

//   if ($result && mysqli_num_rows($result) > 0) {
//     <script>
//     header("Location: dashboard.php");
//         exit();
//   }else {
//     $errMsg = "Invalid usrname or password";
//   echo
//   }
// };

 if ($result && mysqli_num_rows($result) > 0) {
     $_SESSION["id"] = $result['id'];
     $_SESSION["username"] = $result['username']
     $_SESSION['school_name'] = $result['school']

    header("Location:dashboard.php");
    exit();
    }else {
      $errMsg = 'Invalid username or password !';
    };
  };
 
 