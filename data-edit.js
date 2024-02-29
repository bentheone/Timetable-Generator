import { teachers } from "./teachers.js";
console.log("script executed")
const tableBody = document.getElementById('tbody');
    let rowNumber = 0;
for(const teacher of teachers){
    let tname = teacher.name;
    for(const classroom of teacher.classrooms){
        const className = classroom.name;
        for (let i = 0; i < classroom.courses.length; i++) {
            let tr = document.createElement("tr")
            tr.innerHTML = `
            <td>${++rowNumber} |</td>
            <td>${tname}</td>
            <td>${className}</td> 
            <td>${classroom.courses[i].name}</td>
            <td contenteditable="true">${classroom.courses[i].max_p_week}</td>
            <td contenteditable="true">${classroom.courses[i].sessions}</td>
            `
            tableBody.appendChild(tr)
        }
    }
}
