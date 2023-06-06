console.log(
    "QUESTION 1"
);

function person(name,surname,age) {
    this.name=name;
    this.surname=surname;
    this.age=age;
}

const person1 = new person("Mihlali","Matrose",20)

const person2 = new person("Bob","The Builder",24)

const person3 = new person("peppa", "pig",19)

const person4 = new person("Rosie", "everything",13)

const person5 = new person("Teenage Mutant", "Ninja Turtles",36)
console.log(person1);
console.log(
    "QUESTION 2"
)
let people = []

people.push(person1,person2,person3,person4,person5)

console.log(people);

console.log(
    "QUESTION 3"
);

localStorage.setItem("people", JSON.stringify(people));

console.log(
    "QUESTION 4"
);
let insidepeople = JSON.parse(localStorage.getItem("people"));
