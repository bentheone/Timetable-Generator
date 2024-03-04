<?php
include './header.php';
?>


        <section class="main">
            <div class="main-top">
                <h1>TIME TABLE GENERATOR</h1>
                <i class="fas fa-user-cog"></i>
            </div>
  
            <section class="Attendance">
            <div id="noTimetablesYetNotice" style="width: 400px; height: 250px; margin-left: 600px; text-align: center; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background: linear-gradient(45deg, #c7ecc7, #a3d8a3, #7bc67b, #4caf50); background-size: 400% 400%; animation: gradientAnimation 8s infinite alternate; border-radius: 15px; color: #333;">

<b style="font-size: 20px;">No timetables generated yet!</b>

<a href="data-editorial.php" style="text-decoration: none; display: inline-block; padding: 10px 20px; background-color: #fff; color: #4CAF50; border: 2px solid #4CAF50; border-radius: 10px; font-size: 16px; margin-top: 20px;">Generate New One</a>
</div>

<style>
@keyframes gradientAnimation {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>
            </section>
        </section>
    </div>
</body>
    <script type="module" src="../backend/timetables.js"></script>
    
</html>