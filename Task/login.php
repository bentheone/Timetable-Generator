<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>

    </head>
    <style>
        body{
            background-color: black;
        }
           
        .form1-content{
            background-color: white;
            opacity: 0.6;
            text-align: center;
            margin-left: 400px;
            margin-right: 400px;
            height: 500px;
            border: 3px solid lightseagreen;
            border-radius: 20px;

         
            
        }
 
   .body_cont{
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),url(../assets/images/bg-about.jpg);
      
       margin-top: -50px;
       margin-left: -7px;
       margin-right: -8px;
       height: 602px;
       
   }
   .adress-cont{
       background: fixed;
       background-color: white;
       margin-top: -5px;
       height: 100px;
       margin-left: -7px;
       margin-right: -8px;
       margin-bottom: -7px;

   }
   
   .link1{
           color: black;
           text-decoration: none;
           border:1px solid black;
           padding:3px;
           border-radius:8px;

           
       }
       .link1:hover{

           background-color: green;
       }
       #password{
      
      color: olive;
      height: 30px;
     width: 400px;
     border-top: none;
     border-left: none;
     border-right: none;
  }
  #username{
   color: olive;
   height: 30px;
   width: 400px;
   border-top: none;
     border-left: none;
     border-right: none;
  }

  #submit{
   
   color: black;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  }
  #submit:hover{
      color: black;
      background-color: lightseagreen;
  width: 120px;
  height: 40px;
  }
       .logo{
           height: 150px;
       }
       .locaton_ico{
           height: 20px;
           margin-left: 20px;
       }
       .analyst{
           margin-left: 80px;
       }
       .backend{
        margin-left: 120px;
       }
       .frontend{
        margin-left: 100px; 
       }
      
       .phone{
           margin-left: -130px;
           color: black;
           text-decoration: none;
       }
       .phone:hover{
           color: lightseagreen;
       }
    </style>
    <body>
        <br><br>
        <div class="body_cont">
            <br><br>
        <div class="form1-content">
            <form action="loginOp.php" method="post">
               
                <input type="text" name="username" placeholder="Enter username" id="username" required><br><br>
            <input type="password" name="password" placeholder="Enter password" id="password" required><br><br>
            <?php

            ?>
            <input type="submit" value="Login" id="submit">
            </form>
        </div>
    </div>
   
            
    </body>
</html>