import { timetables } from './index.js';
// console.log(timetables)
document.addEventListener('DOMContentLoaded', function () {
    


const timetablesSection = document.getElementsByClassName('Attendance')[0];
function createTimetable(timetable){
    const table = document.createElement('div');
    table.classList.add('attendance-list')
    table.innerHTML = `
    
    <h1>${timetable.name}</h1>
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
                <td id = "cell-0" contenteditable="true" class='course_cell'> </td>
                <td id = "cell-1" contenteditable="true" class='course_cell'></td>
                <td id = "cell-2" contenteditable="true" class='course_cell'></td>
                <td id = "cell-3" contenteditable="true" class='course_cell'></td>
                <td id = "cell-4" contenteditable="true" class='course_cell'></td>
                <td id = "cell-5" contenteditable="true" class='course_cell'></td>
                <td id = "cell-6" contenteditable="true" class='course_cell'></td>
                <td id = "cell-7" contenteditable="true" class='course_cell'></td>
                <td id = "cell-8" contenteditable="true" class='course_cell'></td>
                <td id = "cell-9" contenteditable="true" class='course_cell'></td>
                
                
                
            </tr>
            <tr>
                <td>Tuesday</td>
                <td id = "cell-10" contenteditable="true" class='course_cell'> </td>
                <td id = "cell-11" contenteditable="true" class='course_cell'></td>
                <td id = "cell-12" contenteditable="true" class='course_cell'></td>
                <td id = "cell-13" contenteditable="true" class='course_cell'></td>
                <td id = "cell-14" contenteditable="true" class='course_cell'></td>
                <td id = "cell-15" contenteditable="true" class='course_cell'></td>
                <td id = "cell-16" contenteditable="true" class='course_cell'></td>
                <td id = "cell-17" contenteditable="true" class='course_cell'></td>
                <td id = "cell-18" contenteditable="true" class='course_cell'></td>
                <td id = "cell-19" contenteditable="true" class='course_cell'></td>
                
                
            </tr>
            <tr class="active">
                <td>Wednesday</td>
                <td id = "cell-20" contenteditable="true" class='course_cell'> </td>
                <td id = "cell-21" contenteditable="true" class='course_cell'></td>
                <td id = "cell-22" contenteditable="true" class='course_cell'></td>
                <td id = "cell-23" contenteditable="true" class='course_cell'></td>
                <td id = "cell-24" contenteditable="true" class='course_cell'></td>
                <td id = "cell-25" contenteditable="true" class='course_cell'></td>
                <td id = "cell-26" contenteditable="true" class='course_cell'></td>
                <td id = "cell-27" contenteditable="true" class='course_cell'></td>
                <td id = "cell-28" contenteditable="true" class='course_cell'></td>
                <td id = "cell-29" contenteditable="true" class='course_cell'></td>
                
                
            </tr>
            <tr>
                <td>Thursday</td>   
                <td id = "cell-30" contenteditable="true" class='course_cell'> </td>
                <td id = "cell-31" contenteditable="true" class='course_cell'></td>
                <td id = "cell-32" contenteditable="true" class='course_cell'></td>
                <td id = "cell-33" contenteditable="true" class='course_cell'></td>
                <td id = "cell-34" contenteditable="true" class='course_cell'></td>
                <td id = "cell-35" contenteditable="true" class='course_cell'></td>
                <td id = "cell-36" contenteditable="true" class='course_cell'></td>
                <td id = "cell-37" contenteditable="true" class='course_cell'></td>
                <td id = "cell-38" contenteditable="true" class='course_cell'></td>
                <td id = "cell-39" contenteditable="true" class='course_cell'></td>
               
                
            </tr>
            <tr>
                <td>Friday</td>
                <td id = "cell-40" contenteditable="true" class='course_cell'> </td>
                <td id = "cell-41" contenteditable="true" class='course_cell'></td>
                <td id = "cell-42" contenteditable="true" class='course_cell'></td>
                <td id = "cell-43" contenteditable="true" class='course_cell'></td>
                <td id = "cell-44" contenteditable="true" class='course_cell'></td>
                <td id = "cell-45" contenteditable="true" class='course_cell'></td>
                <td id = "cell-46" contenteditable="true" class='course_cell'></td>
                <td id = "cell-47" contenteditable="true" class='course_cell'></td>
                <td id = "cell-48" contenteditable="true" class='course_cell'></td>
                <td id = "cell-49" contenteditable="true" class='course_cell'></td>
               
                
            </tr>
           
        </tbody>
    </table>
    `
    timetablesSection.appendChild(table);

    // Function to add courses
    
    const timetableIndex = timetables.indexOf(timetable);
    const cells = document.querySelectorAll(`.attendance-list:nth-child(${timetableIndex + 1}) .course_cell`);
    let courses = timetable.courses;

    // Assuming courses is an array of course names
    courses.forEach((course, index) => {
        const cell = cells[index];
        if (cell) {
            cell.textContent = course;
        }
    });


    
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
