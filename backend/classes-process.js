import { teachers } from "./teachers.js";
const selectedTeacher = sessionStorage.getItem('selectedTeacher');
const classesDiv = document.getElementById('classesDiv');
const selectedTeach = teachers.find(teacher => teacher.name === selectedTeacher);
const teacherHeader = document.getElementById('teacherTeaches');
teacherHeader.innerHTML = `${selectedTeacher} teaches...`
let classes = selectedTeach.classrooms;
classes.forEach(classroom=>{
    let teacherLink =  document.createElement("a");
        teacherLink.setAttribute("href", `class-courses.html`);
        teacherLink.setAttribute("id", `class_L4_SOD_A`);
        teacherLink.setAttribute("class", `class-link`);
        teacherLink.innerHTML = ` ${classroom.name}`;
        classesDiv.appendChild(teacherLink);
        teacherLink.addEventListener("click",()=>{
            const className = classroom.name.trim();
            localStorage.setItem('selectedClass', className);
        })
})


