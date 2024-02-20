<?php
$servername = "localhost";
// REPLACE with your Database name
$dbname = "";
// REPLACE with Database user
$username = "root";
// REPLACE with Database user password
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

session_start();
if ($_SERVER['REQUEST_METHOD']=='POST') {
  $u=$_POST['username'];
  $psw=$_POST['password'];
  $sql=mysqli_query($conn,"SELECT * FROM administrator WHERE username='$u' and password='$psw'")or die(mysqli_error($conn));

  $count=mysqli_num_rows($sql);
  if ($count==1) 
  {
    $_SESSION['username']=$u;
    while($row=mysqli_fetch_array($sql))
    {
     $_SESSION["admin_id"] = $row['admin_id'];
        echo "<script>function red(){
        window.location='dosdashboard.php';
        } setInterval(red,1000);
        </script>";
      }

    }
     else{
        echo "
        <center>
        <font color='red' style='font-size: 20px;'>You are entering Invalid Username and Password <br>Please enter real username and password</font>
                 <br> <br><a href='doslogin.php'>Try Again</a>
        </center>";
        echo "<script>function red(){
        window.location='doslogin.php';
        };
        </script>";
    }
  }
?>
