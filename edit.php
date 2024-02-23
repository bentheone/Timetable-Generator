<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page</title>
    <style>
        body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

#loadButton {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
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
<body>

    <button id="loadButton" onclick="runFunctions()">Show overlay</button>

    <div id="loadingOverlay">
        <div class="overlayContent">
            <!-- Include your animated SVG file using the object tag -->
            <object type="image/svg+xml" data="generating-animation.svg" width="100" height="100" class="svg_icon">
                Your browser does not support SVG
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
    function triggerFunctionOnAnotherPage() {
    localStorage.setItem('runFunctionOnAnotherPage', 'true');
    // window.location.href = "anotherPage.html";
}

    </script>
</body>
</html>
