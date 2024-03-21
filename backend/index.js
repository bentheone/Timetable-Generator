import { teachers } from './teachers.js';
const timetables = [
    {
        name:'L4SOD A',
        courses: []
    },
    {
        name:'L4SOD B',
        courses: ['David', 'Canisius','David','David']
    },
    // {
    //     name:'L3PWO',
    //     courses: []
    // },
    {
        name:'L5SOD A',
        courses: []
    },
    {
        name:'L4CSA',
        courses: []
    },
    {
        name:'L4WOT',
        courses: []
    }
]

function moveElement(arr, fromIndex, toIndex) {
    
    if (fromIndex >= 0 && fromIndex < arr.length && toIndex >= 0 && toIndex < arr.length) {
      const removedElement = arr.splice(fromIndex, 1)[0];
      arr.splice(toIndex, 0, removedElement);
  
      return arr; 
    } else {
      throw new Error("Invalid indices provided"); // Handle invalid indices
    }
  };


function printCourses() {
    let tt = [];
    for (const teacher of teachers) {
        const teacherName = teacher.name
        for(const classroom of teacher.classrooms){
            const className = classroom.name;
            for(const course of classroom.courses){
                const courseName = course.name;
                let maxWeekly = course.max_p_week;
                const sessions = course.sessions;
                let maxDaily = Math.floor(maxWeekly/sessions)
                for(let timetable of timetables){
                    tt = timetable.courses
                
                if(timetable.name == className){
                if(maxWeekly <= 2) {
                    for (let i = 0; i <= maxWeekly; i++) {
                        //console.log(`The course ${courseName} has to be printed ${maxWeekly} times`)
                        tt.push(teacherName);
                        maxWeekly = maxWeekly -1
                        //console.log(`${courseName} is remaining with ${maxWeekly}`)
                    }
                }


                if(maxWeekly > 2 && sessions > 1){
                    //if (sessions % 2 != 0 || maxDaily % 2 != 0 ) {
                        
                    
                    for (let i = 1; i <= maxDaily; i++) {
                        //console.log(`The maxdaily of this course ${courseName} is ${maxDaily} sessions is ${sessions} max weekly is ${maxWeekly}`)

                        tt.push(teacherName);
                        tt.unshift(teacherName);
                        maxWeekly = maxWeekly -2;
                        //console.log(`The maxdaily of this course ${courseName} is ${maxDaily} sessions is ${sessions} remaining maxweekly is ${maxWeekly}`)
                        
                    //}
                    }
            
                
                }

                //     }
                    
                // }
                if(maxWeekly > 0){
                for (let i = 0; i <= maxWeekly; i++) {
                    //console.log(`The maxdaily of ${courseName} remaining is ${maxWeekly}`)
                    tt.push(teacherName);
                    maxWeekly--;
                 }
            }
           // console.log(tt)
        }
        }
        }
        }


    }
    console.log(timetables)
};

function checkCorrupts() {
    let similars = [];
    for(let i = 0; i < timetables.length; i++){
        let tt = timetables[i].courses;
        for(let j = 0; j < tt.length; j++){
            for(let k = i + 1; k < timetables.length; k++){
                if(tt[j] ==  timetables[k].courses[j]){
                    //let corruptTt = timetables[i].courses;
                    similars.push(tt[j]);
                    let corruptIndex = j
                    moveElement(timetables[i].courses, corruptIndex, corruptIndex + 1); 
                    console.log(`Found a corrupted teacher:${tt[j]} in class ${timetables[i].name} corrupted to ${timetables[k].courses[j]} in class ${timetables[k].name} on id ${j}`);
                }
            }
        }
    
    }
    console.log(similars)
    //console.log(corrruptTt);
    
}
function addFeetimes() {
    timetables.forEach(timetable => {
        let tt = timetable.courses;
        if(tt.length < 50){
            let freeTimes = 50 - tt.length;
            for(let i=0; i<freeTimes; i++) {
                let randomIndex = Math.floor(Math.random() * (49 - i)) + i;
                tt.splice(randomIndex,0,"F");
            }

        }
    })
}

  
printCourses()
checkCorrupts()
addFeetimes()
console.log(timetables)

export { timetables }