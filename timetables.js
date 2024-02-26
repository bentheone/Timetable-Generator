import { timetables } from './index.js';


// Function to dynamically create and display the timetables
function createAndDisplayTimetables() {
    const container = document.querySelector('.main .attendance-list');
    
    // Clear existing content
    container.innerHTML = '';

    // Iterate through each timetable
    timetables.forEach(timetable => {
        // Create elements for the timetable
        const timetableTitle = document.createElement('h1');
        timetableTitle.textContent = `TIME TABLE GENERATOR - ${timetable.className}`;

        const table = document.createElement('table');
        table.classList.add('table');

        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Days</th>
            <th>8:30 AM</th>
            <th>9:10 AM</th>
            <th>9:50 AM</th>
            <th>10:50 AM</th>
            <th>11:30 AM</th>
            <th>12:10 PM</th>
            <th>12:50 PM</th>
            <th>2:20 PM</th>
            <th>3:00 PM</th>
            <th>3:40 PM</th>
        `;
        tableHead.appendChild(headerRow);

        // Iterate through the days and courses
        timetable.courses.forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.day}</td>
                <td contenteditable="true" class='course_cell'>${course.time830}</td>
                <td contenteditable="true" class='course_cell'>${course.time910}</td>
                <td contenteditable="true" class='course_cell'>${course.time950}</td>
                <td contenteditable="true" class='course_cell'>${course.time1130}</td>
                <td contenteditable="true" class='course_cell'>${course.time1200}</td>
                <td contenteditable="true" class='course_cell'>${course.time100}</td>
                <td contenteditable="true" class='course_cell'>${course.time1130}</td>
                <td contenteditable="true" class='course_cell'>${course.time1200}</td>
                <td contenteditable="true" class='course_cell'>${course.time100}</td>
                <td contenteditable="true" class='course_cell'>${course.time100}</td>
            `;
            tableBody.appendChild(row);
        });

        // Append elements to the container
        container.appendChild(timetableTitle);
        table.appendChild(tableHead);
        table.appendChild(tableBody);
        container.appendChild(table);
    });
}

createAndDisplayTimetables();
