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

    let randomPerson = mapFullNames[Math.floor(Math.random() * people.length)];

    document.getElementById("1").innerText = `Answer: ${JSON.stringify(randomPerson)}`;

}


function exercise2() {
    // Return the people sorted by the number of skills they have.

    let sortPeopleSkills = people.sort((a, b) => {
        let aSkills = a.Skills.length;
        let bSkills = b.Skills.length;
        if (aSkills > bSkills) {
            return -1;
        };
        if (aSkills < bSkills) {
            return 1;
        };
        return 0;
    });

    let mapFullNames = sortPeopleSkills.map(person => {
        return `${person.firstName} ${person.lastName}`;
    }).join(", ");

    document.getElementById("2").innerText = `Answer: ${JSON.stringify(mapFullNames)}`;

}


function exercise3() {
    // Return the people sorted by their name, starting with last name then first name.

    
    let sortedPeopleFN = people.sort((a, b) => {
        let aFName = a.firstName;
        let bFName = b.firstName;
        if (aFName < bFName) {
            return -1;
        };
        if (aFName > bFName) {
            return 1;
        };
        return 0;
    });
    
    let sortedPeopleLN = sortedPeopleFN.sort((a, b) => {
        let aLName = a.lastName;
        let bLName = b.lastName;
        if (aLName < bLName) {
            return -1;
        };
        if (aLName > bLName) {
            return 1;
        };
        return 0;
    }); 
    
    let sortedNamesByNameLF = sortedPeopleLN.map(person => {
        return `${person.firstName} ${person.lastName}`;
    }).join(", ");

    document.getElementById("3").innerText = `Answer: ${JSON.stringify(sortedNamesByNameLF)}`;

}


function exercise4() {
    // Return an array of the people with the fields: name, job and salary. 
    // Make name the combination of first and last name and the salary a random number between 60000 and 120000.

    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomSalary = randomNumber(60000, 120000);

    let peopleWithFields = people.map(person => {
        return `${person.firstName} ${person.lastName} ${person.job} ${randomSalary}`;
    }).join(", ");
    
    document.getElementById("4").innerText = `Answer: ${JSON.stringify(peopleWithFields)}`;

}