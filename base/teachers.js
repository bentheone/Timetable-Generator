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
            },
            {
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

export { teachers }

