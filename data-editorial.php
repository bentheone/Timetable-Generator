<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-compatible" content="ie=edge">
        <title>TT GENERATOR</title>
        <link rel="stylesheet" href="tform.css"><style>
 

#loadButton {
    padding: 10px 20px;
    font-size: 16px;
    border: 1px green;
    color: green;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#loadingOverlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.overlayContent {

}
.svg_icon {
    background: none;
}

    </style>
        </head>
   <body class="dashboard">
        <h2>The information you have about teachers</h2>
        <table><th></th><th>teacher</th><th>class</th><th>course</th><th>max_daily</th><th>sessions</th>
            <tr><td>1 |</td><td>REVOCATE <td>L4SODB</td> <td>BACKEND</td></td>
                <td contenteditable = "true">2</td>
                <td><input class="ses" type="number" placeholder="2" ></td>
            
            <tr><td>2 |</td><td>DAVID <td>L4SODB</td> <td>PHP</td></td> 
                <td contenteditable = "true">2</td>
                <td contenteditable = "true">2</td>
            
            <tr><td>3 |</td><td>CLAUDINE <td>L4SODB</td> <td>NODE</td></td> 
                <td contenteditable = "true">2</td>
                <td contenteditable = "true">2</td>
            </td>
            <tr><td>4 |</td><td>Venant <td>L4SODB</td> <td>MATH</td></td>
                <td contenteditable = "true">2</td>
                <td contenteditable = "true">2</td>
            </td>
            <tr><td>5 |</td><td>Eliab <td>L4SODB</td> <td>ENGLISH</td></td>
                <td contenteditable = "true">2</td>
                <td contenteditable = "true">2</td>
            



        </table>
        <a href="log in phases.html"><button type="save" name="save" class="st"><span></span><img class="pic" src="arrows.png" >Back</button></a>
        <a href=""></a><button id="loadButton" onclick="runFunctions()"type="save" name="save" class="st" ><span></span><img class="pic" src="gth.jpg">Generate</button>
      <a href="log in phases.html"><button type="save" name="save" class="st"><span></span><img class="pic" src="asfr.jpg">Startafresh</button></a>
      <div id="loadingOverlay">
        <div class="overlayContent">
            <!-- Include your animated SVG file using the object tag -->
            <object type="image/svg+xml" data="generating-animation.svg" width="100" height="100" class="svg_icon">
               
            </object>
        </div>
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