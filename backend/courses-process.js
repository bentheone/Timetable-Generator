import { teachers } from "./teachers.js";
const selectedClassEl = document.getElementById('selectedClass');
const selectedTeacher = sessionStorage.getItem('selectedTeacher');
const selectedClass = localStorage.getItem('selectedClass');
if (selectedClass && selectedTeacher) { 
    console.log(selectedClass)
    console.log(selectedTeacher)
    selectedClassEl.innerHTML = selectedClass;
    
}else {
    console.log("No data")
}

const tbody = document.getElementById('tbody');
const teacher = teachers.find(teach => teach.name === selectedTeacher);
if (teacher) {
    const classrooms = teacher.classrooms;
    console.log(classrooms)
    const classroom = classrooms.find(room => room == selectedClass);

    if (classroom) {
        const courses = classroom.courses;
        courses.forEach(course => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <td></td>
                <td>${course.name}</td>
                <td contenteditable="true">${course.max_p_week}</td>
                <td contenteditable="true">${course.sessions}</td>
            `;
            tbody.appendChild(tr);
        });
    } else {
        console.log("Classroom not found");
    }
} else {
    console.log("Teacher not found");
}

