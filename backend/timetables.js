import { timetables } from './index.js';
// console.log(timetables)
document.addEventListener('DOMContentLoaded', function () {
    


const timetablesSection = document.getElementsByClassName('Attendance')[0];
function createTimetable(timetable){
    const table = document.createElement('div');
    table.classList.add('attendance-list')
    table.innerHTML = `
    
    <h1>${timetable.name}</h1>
    <table class="table" id = "table-${timetable.id}"> 
        <thead>
            <tr>
                <th>Days</th>
                <th>8:30 AM</th>
                <th>9:10 AM</th>
                <th>9:50 AM</th>
                <th>11:30 AM</th>
                <th>12:00 PM</th>
                <th>1:00 PM</th>
                <th>11:30 AM</th>
                <th>12:00 PM</th>
                <th>1:00 PM</th>
                <th>1:00 PM</th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td>Monday</td>
                <td id = "cell-0 " contenteditable="false" class='course_cell'> </td>
                <td id = "cell-1" contenteditable="false" class='course_cell'></td>
                <td id = "cell-2" contenteditable="false" class='course_cell'></td>
                <td id = "cell-3" contenteditable="false" class='course_cell'></td>
                <td id = "cell-4" contenteditable="false" class='course_cell'></td>
                <td id = "cell-5" contenteditable="false" class='course_cell'></td>
                <td id = "cell-6" contenteditable="false" class='course_cell'></td>
                <td id = "cell-7" contenteditable="false" class='course_cell'></td>
                <td id = "cell-8" contenteditable="false" class='course_cell'></td>
                <td id = "cell-9" contenteditable="false" class='course_cell'></td>
                
                
                
            </tr>
            <tr>
                <td>Tuesday</td>
                <td id = "cell-10" contenteditable="false" class='course_cell'> </td>
                <td id = "cell-11" contenteditable="false" class='course_cell'></td>
                <td id = "cell-12" contenteditable="false" class='course_cell'></td>
                <td id = "cell-13" contenteditable="false" class='course_cell'></td>
                <td id = "cell-14" contenteditable="false" class='course_cell'></td>
                <td id = "cell-15" contenteditable="false" class='course_cell'></td>
                <td id = "cell-16" contenteditable="false" class='course_cell'></td>
                <td id = "cell-17" contenteditable="false" class='course_cell'></td>
                <td id = "cell-18" contenteditable="false" class='course_cell'></td>
                <td id = "cell-19" contenteditable="false" class='course_cell'></td>
                
                
            </tr>
            <tr class="active">
                <td>Wednesday</td>
                <td id = "cell-20" contenteditable="false" class='course_cell'> </td>
                <td id = "cell-21" contenteditable="false" class='course_cell'></td>
                <td id = "cell-22" contenteditable="false" class='course_cell'></td>
                <td id = "cell-23" contenteditable="false" class='course_cell'></td>
                <td id = "cell-24" contenteditable="false" class='course_cell'></td>
                <td id = "cell-25" contenteditable="false" class='course_cell'></td>
                <td id = "cell-26" contenteditable="false" class='course_cell'></td>
                <td id = "cell-27" contenteditable="false" class='course_cell'></td>
                <td id = "cell-28" contenteditable="false" class='course_cell'></td>
                <td id = "cell-29" contenteditable="false" class='course_cell'></td>
                
                
            </tr>
            <tr>
                <td>Thursday</td>   
                <td id = "cell-30" contenteditable="false" class='course_cell'></td>
                <td id = "cell-31" contenteditable="false" class='course_cell'></td>
                <td id = "cell-32" contenteditable="false" class='course_cell'></td>
                <td id = "cell-33" contenteditable="false" class='course_cell'></td>
                <td id = "cell-34" contenteditable="false" class='course_cell'></td>
                <td id = "cell-35" contenteditable="false" class='course_cell'></td>
                <td id = "cell-36" contenteditable="false" class='course_cell'></td>
                <td id = "cell-37" contenteditable="false" class='course_cell'></td>
                <td id = "cell-38" contenteditable="false" class='course_cell'></td>
                <td id = "cell-39" contenteditable="false" class='course_cell'></td>
               
                
            </tr>
            <tr>
                <td>Friday</td>
                <td id = "cell-40" contenteditable="false" class='course_cell'> </td>
                <td id = "cell-41" contenteditable="false" class='course_cell'></td>
                <td id = "cell-42" contenteditable="false" class='course_cell'></td>
                <td id = "cell-43" contenteditable="false" class='course_cell'></td>
                <td id = "cell-44" contenteditable="false" class='course_cell'></td>
                <td id = "cell-45" contenteditable="false" class='course_cell'></td>
                <td id = "cell-46" contenteditable="false" class='course_cell'></td>
                <td id = "cell-47" contenteditable="false" class='course_cell'></td>
                <td id = "cell-48" contenteditable="false" class='course_cell'></td>
                <td id = "cell-49" contenteditable="false" class='course_cell'></td>
               
                
            </tr>
            </th>
            <th>
            <button type="button" class="editBtn">
                <div class="button-text1">EDIT</div>
                <div class="button-icon">
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </button>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

        </th>
        <th>
            <button type="button" class="saveBtn" >
                <div class="button-text1">SAVE</div>
                <div class="button-icon">
                    <ion-icon name="bookmark-outline"></ion-icon>       
                </div>
            </button>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>


        </th>
        <th>
            <button type="button" id="printBtn" >
                <div class="button-text1">PRINT</div>
                <div class="button-icon">
                    <ion-icon name="print-outline"></ion-icon>   
                </div>
            </button>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

        </th>
           
        </tbody>
    </table>
    `
    timetablesSection.appendChild(table);

    
   
    const currentTable = document.getElementById(`table-${timetable.id}`);
    const cells = currentTable.querySelectorAll('.course_cell');

    let courses = timetable.courses;
    courses.forEach((course, index) => {
        const cellId = `cell-${index}`;
        const cell = currentTable.querySelector(`#${cellId}`);
        if (cell) {
            cell.textContent = course;
        }
    });


    function printDiv(divId) {
        var printContents = document.getElementById(divId).outerHTML;
        var originalContents = document.body.innerHTML;
    
        var printWindow = window.open('', '_blank');
        printWindow.document.open();
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.onload = function () {
            printWindow.print();
            printWindow.onafterprint = function () {
                printWindow.close();
                document.body.innerHTML = originalContents;
            };
        };
    
    
    }

    document.getElementById("printBtn").addEventListener("click", function() {
        printDiv(`table-${timetable.id}`);
     });
    // Add an event listener for the "edit" button within the current table
    // currentTable.querySelector(".editBtn").addEventListener("click", function () {
    //     cells.forEach(cell => {
    //         cell.setAttribute('contenteditable', 'true');
    //     });
    // });

    
}

function createAndDisplayTimetables() {
    timetables.forEach(timetable => {
        createTimetable(timetable);
    });
    
}


const printTimetablesFunction = localStorage.getItem('printTimetables')
    if(printTimetablesFunction === 'true'){
        document.getElementById('noTimetablesYetNotice').style.display='none';
    createAndDisplayTimetables();
    
    
  }
   
}); 

