// start by constructing a variable that is an array of objects, this is our data.
let people = [{
    "id": 1,
    "firstName": "Frank",
    "lastName": "Herbert",
    "job": "Lead Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS", "SCRUM Master"],
    "Salary": 120196 // $120,196
},
{
    "id": 2,
    "firstName": "Joan",
    "lastName": "Armorett",
    "job": "Jr Software Developer",
    "Skills": ["JavaScript", "HTML", "CSS"],
    "Salary": 70000 // $70,000
},
{
    "id": 3,
    "firstName": "John",
    "lastName": "Mosses",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS"],
    "Salary": 101234 // $101,234
},
{
    "id": 4,
    "firstName": "Janet",
    "lastName": "Lee",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS", "Technical Writer"],
    "Salary": 86000 // $86,000
},
{
    "id": 5,
    "firstName": "Garry",
    "lastName": "Funny",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "QA", "C#"],
    "Salary": 89100 // $89,100
},
{
    "id": 6,
    "firstName": "Karen",
    "lastName": "Enoch",
    "job": "Jr Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS"],
    "Salary": 70000 // $70,000
},
{
    "id": 7,
    "firstName": "Jason",
    "lastName": "Keel",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "SQL"],
    "Salary": 98000 // $98,000
}
];


function exercise1() {
    // Return one random person from the array of people.

    let mapFullNames = people.map(person => {
        return `${person.firstName} ${person.lastName}`;
    });

    let randomPerson = mapFullNames[Math.floor(Math.random() * 7)];

    document.getElementById("1").innerText = `Answer: ${JSON.stringify(randomPerson)}`;

}


function exercise2() {
    // Return the people sorted by the number of skills they have.

    // let mapFullNames = people.map(person => {
    //     return `${person.firstName} ${person.lastName}`;
    // })

    // let numberSkills = people.filter((person) => { 
    //     let filterAn = person.Skills.filter(skill => skill === "SQL" ).length > 0;
    //     return filterAn;
    // });

    let numberSkills = people.Skills.map(people => { 
        return 
    });

    document.getElementById("2").innerText = `Answer: ${JSON.stringify(numberSkills)}`;
    // document.getElementById("2").innerText = `Answer: ${JSON.stringify(sortedNamesByNum)}`;

}


function exercise3() {
    // Return the people sorted by their name, starting with lastName then firstName.



    document.getElementById("3").innerText = `Answer: ${JSON.stringify(sortedNamesByNameLF)}`;

}


function exercise4() {
    // Return an array of the people with the fields: name, job and salary. 
    // Make name the combination of first and last name and the salary a random number between 60000 and 120000.



    document.getElementById("4").innerText = `Answer: ${JSON.stringify(peopleWithFields)}`;

}