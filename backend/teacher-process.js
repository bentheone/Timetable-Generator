import { teachers } from './teachers.js';

const teachersArray = getTeachers();


function getTeachers(){
    let teachersArr = []
    for(const teacher of teachers){
        let Tname = teacher.name;
        teachersArr.push(Tname)
    }
    return teachersArr;
}

document.addEventListener('DOMContentLoaded', function () {
    const teacherInput = document.getElementById('teacherInput');
    const suggestionsList = document.getElementById('suggestions');

    teacherInput.addEventListener('input', function () {
        const searchTerm = teacherInput.value.toLowerCase();
        const matchingTeachers = filterTeachers(searchTerm);
    

    suggestionsList.innerHTML = ''; 
    matchingTeachers.forEach(teacher => {
        const listItem = document.createElement('li');
        listItem.textContent = teacher;
        listItem.addEventListener('click', function () {
            teacherInput.value = teacher;
            suggestionsList.innerHTML = '';
        });
    suggestionsList.appendChild(listItem);
    });
    });
});

document.getElementById('teacherForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedTeacher = teacherInput.value;

    if (teachersArray.includes(selectedTeacher)) {
        sessionStorage.setItem('selectedTeacher', selectedTeacher);
        window.location.href='classes.html';
    } else {
        alert(`Teacher ${selectedTeacher} not found! Please select a valid teacher.`);
    }
});

function filterTeachers(searchTerm) {
    return teachersArray.filter(teacher => teacher.toLowerCase().includes(searchTerm));
}
