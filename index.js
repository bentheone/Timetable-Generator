const teachers = [
    {
        id: 1,
        name: 'Revocate',
        classrooms:[
            {
                name: 'L4SOD A',
                courses : [
                    {
                        name:'Backend',
                        max_p_week: 4,
                        sessions: 1
                    },
                    {
                        name:'CS',
                        max_p_week: 2,
                        sessions: 1
                    }                       
                ]
            },{
                name:'L5SOD A',
                courses : [
                    {
                        name:'ICT Project',
                        max_p_week: 2,
                        sessions: 1
                    },
                    {
                        name:'Use ICT',
                        max_p_week: 2,
                        sessions: 2
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'David',
        classrooms: [{
            name: 'L4SOD A',
            courses : [{
                name:'PHP',
                max_p_week: 8,
                sessions: 3
            }]
        }]
    },
    {
        id: 3,
        name: 'Annonciata',
        classrooms: [{
            name: 'L4SOD A',
            courses : [{
                name:'DS',
                max_p_week: 4,
                sessions: 1
            }]
        },{
            name: 'L5SOD A',
            courses : [{
                name:'DB',
                max_p_week: 6,
                sessions: 2
            },{
                name:'Web application',
                max_p_week: 7,
                sessions: 2
            }]
        }]
    },
    {
        id: 4,
        name: 'Eliab',
        classrooms: [{
            name: 'L4SOD A',
            courses : [{
                name:'Kinyarwanda',
                max_p_week: 2,
                sessions: 1
            }]
        },{
            name: 'L4CSA',
            courses : [{
                name:'Kinyarwanda',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 5,
        name: 'Soeur',
        classrooms: [{
            name: 'L4SOD A',
            courses : [{
                name:'Religion',
                max_p_week: 1,
                sessions: 1
            }]
        },{
            name: 'L5SOD A',
            courses : [{
                name:'Religion',
                max_p_week: 1,
                sessions: 1
            }]
        },
        {
            name:'L4CSA',
            courses : [{
                name:'Religion',
                max_p_week: 2,
                sessions: 2
            }]
        }]
    },
    {
        id: 6,
        name: 'Canisius',
        classrooms: [{
            name: 'L4SOD A',
            courses : [{
                name:'Math',
                max_p_week: 4,
                sessions: 2
            }]
        },{
            name: 'L5SOD A',
            courses : [{
                name:'Math',
                max_p_week: 4,
                sessions: 2
            }]
        }]
    },
    {
        id: 7,
        name: 'N.Vincent',
        classrooms: [{
            name:'L4SOD A',
            courses : [{
                name:'Physics',
                max_p_week: 2,
                sessions: 1
            }]
        },{
            name:'L5SOD A',
            courses : [{
                name:'Physics',
                max_p_week: 2,
                sessions: 1
            }]
        },{
            name:'L4CSA',
            courses : [{
                name:'Physics',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 10,
        name: 'Claudine',
        classrooms: [
            {
                name: 'L4SOD A',
                courses : [
                    {
                        name:'Window Server',
                        max_p_week: 4,
                        sessions: 1
                    },
                    {
                        name:'Node js',
                        max_p_week: 4,
                        sessions: 1
                    }
                ]
            },
            {
                name: 'L4CSA',
                courses : [
                    {
                        name:'C++',
                        max_p_week: 3,
                        sessions: 2
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'Fr Laurien',
        classrooms: [{
            name:'L4SOD A',
            courses : [{
                name:'Francais',
                max_p_week: 2,
                sessions: 1
            }]
        },{
            name:'L4CSA',
            courses : [{
                name:'C++',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 12,
        name: 'Eugene',
        classrooms: [{
            name:'L4SOD A',
            courses : [{
                name:'English',
                max_p_week: 2,
                sessions: 1
            }]
        },
        {
            name:'L5SOD A',
            courses : [{
                name:'English',
                max_p_week: 2,
                sessions: 1
            }]
        },
        {
            name:'L4CSA',
            courses : [{
                name:'English',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 13,
        name: 'B.Vincent',
        classrooms: [{
            name:'L3PWO',
            courses : [{
                name:'Physics',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 14,
        name: 'Muhire',
        classrooms: [{
            name:'L3PWO',
            courses : [{
                name:'Chimie',
                max_p_week: 1,
                sessions: 1
            }]
        }]
    },
    {
        id: 15,
        name: 'Dorcas',
        classrooms: [{
            name:'L3PWO',
            courses : [{
                name:'Technical',
                max_p_week: 5,
                sessions: 2
            }]
        }]
    },
    {
        id: 16,
        name: 'Leoncie',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'S.A',
                max_p_week: 7,
                sessions: 3
            }]
        }]
    },
    {
        id: 17,
        name: 'Primitive',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'DB Server',
                max_p_week: 3,
                sessions: 2
            }]
        }]
    },
    {
        id: 18,
        name: 'KAYUMBU',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'BO',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 19,
        name: 'Isaie',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'Kinyarwanda',
                max_p_week: 1,
                sessions: 1
            }]
        }]
    },
    {
        id: 20,
        name: 'Kamanzi',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'IAP',
                max_p_week: 1,
                sessions: 1
            }]
        }]
    },
    {
        id: 21,
        name: 'Ramadhan',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'Ethics',
                max_p_week: 1,
                sessions: 1
            }]
        }]
    },
    {
        id: 22,
        name: 'Janviere',
        classrooms: [{
            name:'L5SOD A',
            courses : [{
                name:'Backend',
                max_p_week: 3,
                sessions: 1
            }]
        },
        {
            name:'L4CSA',
            courses : [{
                name:'C Programming',
                max_p_week: 3,
                sessions: 1
            }]
        },
        {
            name:'L4CSA',
            courses : [{
                name:'Firmware',
                max_p_week: 5,
                sessions: 2
            }]
        }]
    },
    {
        id: 23,
        name: 'Aphrodis',
        classrooms: [{
            name:'L4CSA',
            courses : [{
                name:'BP',
                max_p_week: 2,
                sessions: 1
            }]
        }]
    },
    {
        id: 24,
        name: 'Damascene',
        classrooms: [{
            name:'L4CSA',
            courses : [{
                name:'Citizenship',
                max_p_week: 1,
                sessions: 1
            }]
        }]
    },
    {
        id: 25,
        name: 'Justin',
        classrooms: [{
            name:'L4CSA',
            courses : [{
                name:'LED',
                max_p_week: 3,
                sessions: 1
            }]
        },{
            name:'L4CSA',
            courses : [{
                name:'Embedded',
                max_p_week: 2,
                sessions: 2
            }]
        },{
            name:'L4CSA',
            courses : [{
                name:'Enclosure',
                max_p_week: 5,
                sessions: 2
            }]
        },{
            name:'L4CSA',
            courses : [{
                name:'Refub',
                max_p_week: 1,
                sessions: 1
            }]
        }]
    },
    {
        id: 26,
        name: 'Alfred',
        classrooms: [{
            name:'L4CSA',
            courses : [{
                name:'Solid Work',
                max_p_week: 3,
                sessions: 1
            }]
        }]
    },
    {
        id: 27,
        name: 'Felix',
        classrooms: [{
            name:'L4CSA',
            courses : [{
                name:'Maths',
                max_p_week: 4,
                sessions: 2
            }]
        }]
    },
    {
        id: 28,
        name: 'Reverien',
        classrooms: [{
            name:'L4CSA',
            courses : [{
                name:'Digital EL',
                max_p_week: 3,
                sessions: 1
            }]
        }]
    }
];
const timetables = [
    {
        name:'L4SOD A',
        courses: []
    },
    {
        name:'L4SOD B',
        courses: ['Canisius', 'Canisius','David','David']
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
                    let corruptTt = timetables[i].courses;
                    console.log(`Found a corrupted teacher:${tt[j]} in class ${timetables[i].name} corrupted to ${timetables[k].courses[j]} in class ${timetables[k].name} on id ${j}`);
                    similars.push(tt[j]);
                    corruptIndex = j
                    moveElement(timetables[i].courses, corruptIndex, corruptIndex + 1); 
                }
            }
        }
    
    }
    console.log(similars)
    //console.log(corrruptTt);
    
}

  
printCourses()
checkCorrupts()
// correctCorrupts()