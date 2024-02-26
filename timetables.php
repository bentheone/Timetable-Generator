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
                <li><a href="login and registration.html">
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
                <div class="attendance-list">
                    <!-- <h1 id="ttName"></h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>8:30 AM</th>
                                <th>9:10 AM</th>
                                <th>9:50 AM</th>
                                <th>11:30 AM</th>
                                <th>12:00 PM</th>
                                <th>1:00 PM</th>>
                                <th>11:30 AM</th>
                                <th>12:00 PM</th>
                                <th>1:00 PM</th>
                                <th>1:00 PM</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Monday</td>
                                <td contenteditable="true" class='course_cell'> </td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                
                                
                                
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td contenteditable="true" class='course_cell'> </td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                
                                
                            </tr>
                            <tr class="active">
                                <td>Wednesday</td>
                                <td contenteditable="true" class='course_cell'> </td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                
                                
                            </tr>
                            <tr>
                                <td>Thursday</td>   
                                <td contenteditable="true" class='course_cell'> </td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                               
                                
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td contenteditable="true" class='course_cell'> </td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                                <td contenteditable="true" class='course_cell'></td>
                               
                                
                            </tr> -->
                           
                        </tbody>
                    </table>
                </div>
                
            </section>
        </section>
    </div>
    <script type="module" src="./timetables.js"></script>
</body>
</html>