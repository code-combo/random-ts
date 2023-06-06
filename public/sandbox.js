"use strict";
// const siblings = ["Oluwaseyi", "Oluwapelumi", "Similoluwa"];
// siblings.push("me🥹");
// siblings[0] = 'shegzy';
// console.log(siblings)
// Objects in Typescript
// let futarian = {
//   name: "Toluwanimi Atofarati",
//   age: 20,
//   matricNo: "IFT/20/5031",
//   level: 200
// }
// futarian = {
//   name: 'Similoluwa',
//   age: 17,
//   matricNo: "NILL",
//   level: 0
// }
// console.log(futarian);
// EXPLICIT TYPES
let character;
character = "Toluwanimi";
console.log(character);
// ARRAYS
let siblings = [];
siblings.push('seyi', 'pelumi', 'simi');
console.log(siblings);
// UNION TYPES
let ninjas = ["ogbeni!"];
ninjas.push('alaye', 100, "idan", false, "high don", true);
console.log(ninjas);
// OBJECTS
let kickOne;
kickOne = {
    model: "Nike",
    name: "Sb Dunk Jarritos"
};
let kickTwo;
kickTwo = {
    model: "Nike",
    name: "Air Max",
    year: 2015,
    price: "$300"
};
console.log(kickOne, kickTwo);
// DYNAMIC(any)
let kickThree = [];
kickThree = ["Nike Air Force"];
kickThree = false;
// FUNCTION BASICS
let greet;
greet = () => {
    console.log('hello, world');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(1, 2);
const rxn = (emoji) => {
    console.log(`Toluwanimi reacted "${emoji}" to your message`);
};
rxn(true);
const futarian = (student) => {
    console.log(`${student.name} had a CGPA of ${student.CGPA} this session (${student.matricNo})`);
};
futarian({
    name: "Toluwanimi",
    matricNo: "IFT/20/5031",
    CGPA: 3.6
});
