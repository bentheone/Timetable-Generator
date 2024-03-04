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
//     t>
//     header("Location: dashboard.php");
//         exit();
//   }else {
//     $errMsg = "Invalid usrname or password";
//   echo
//   }
// };

if ($result && mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  $_SESSION["id"] = $row['id'];
  $_SESSION["username"] = $row['username'];
  $_SESSION['school_name'] = $row['school'];
  $_SESSION['office'] = $row['office']

  header("Location: dashboard.php");
  exit();
    }else {
      $errMsg = 'Invalid username or password !';
    };
  };
 
 