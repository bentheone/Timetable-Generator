<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DATA | EDITORIAL</title>
    <link rel="stylesheet" href="darshtt.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlTt..."/>
<script type="module" src="data-edit.js"></script>
    <style>

body {
    transition: filter 0.3s ease;
}

.container {
    position: relative;
}

#loadingOverlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.overlayContent {
    text-align: center;
}

.svg_icon {
    width: 100px;
    height: 100px;
}

.overlayActive body {
    filter: brightness(0.7);
}

    </style>
</head>
<body>
    <div class="container">
        <nav>
            <ul>
                <li>
                    <a href="#" class="logo">
                        <img src="Screenshot 2024-01-18 161009.png">
                        <span class="nav-item">Admin</span>
                    </a> 
                </li>
                <li><a href="#">
                    <i class=" fas fa-menorah"></i>
                    <span class="nav-item">Darshboard</span>

                </a></li>
                <li><a href="#">
                    <i class=" fas fa-comment"></i>
                    <span class="nav-item">About us </span>

                </a></li>
                <li><a href="#">
                    <i class=" fas fa-sign-out-alt"></i>
                    <span class="nav-item">Login</span>

               
                <li><a href="#">
                    <i class=" fas fa-cog"></i>
                    <span class="nav-item">Settings</span>

                </a></li>
                <li><a href="#" class="logout">
                    <i class=" fas fa-sign-out-alt"></i>
                    <span class="nav-item">Log out</span>

                </a></li>
            </ul>
        </nav>



        <section class="main">
            <div class="main-top">
                <h1>DATA</h1>
                <h2>EDITORIAL</h2>
                <h3>PAGE</h3>
                <i class="fas fa-user-cog"></i>
            </div>
    <section class="Attendance">
                <div class="attendance-list">
                   
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Teacher's name</th>
                                <th>class</th>
                                <th>courses</th>
                                <th>Max_daily</th>
                                <th>Sessions</th>
                               
                            </tr>
                        </thead>
                        <tbody id="tbody">

                        </tbody>
                            <th>
                                <button type="button" class="button1">
                                    <div class="button-text1" onclick="enableEditMode()">BACK</div>
                                    <div class="button-icon">
                                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                    </div>
                                </button>
                                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    
                            </th>
                            <th>
                                <button type="button" class="button1"onclick="runFunctions()"type="save" name="save" class="st" >
                                    <div class="button-text1" >GENERATE</div>
                                    <div class="button-icon">
                                        <ion-icon name="cloud-upload-outline"></ion-icon>
                                    </div>
                                </button>
                                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    
                            </th>
                            <th>
                                <button type="button" class="button1">
                                    <div class="button-text1" onclick="enableEditMode()">START A FRESH</div>
                                    <div class="button-icon">
                                        <ion-icon name="snow-outline"></ion-icon>
                                    </div>
                                </button>
                                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    
                            </th>
                           
                        
                        </table>
                    <div id="loadingOverlay">
                        <div class="overlayContent">
                            <object type="image/svg+xml" data="generating-animation.svg" width="100" height="100" class="svg_icon">
                            
                            </object>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
    <script>
        function runFunctions(){
            showOverlay();
            triggerPrintCoursesFunction();

    }

    function showOverlay() {
    document.getElementById("loadingOverlay").style.display = "flex";
    setTimeout(function() {
        window.location.href = "timetables.php";
    }, 6000);
    }

    function triggerPrintCoursesFunction() {
    localStorage.setItem('printTimetables', 'true');
    // window.location.href = "anotherPage.html";
}

    </script>
</body>
</html>