"use strict";
// const siblings = ["Oluwaseyi", "Oluwapelumi", "Similoluwa"];
// siblings.push("me🥹");
// siblings[0] = 'shegzy';
// console.log(siblings)
// Objects in Typescript
let futarian = {
    name: "Toluwanimi Atofarati",
    age: 20,
    matricNo: "IFT/20/5031",
    level: 200
};
futarian = {
    name: 'Similoluwa',
    age: 17,
    matricNo: "NILL",
    level: 0
};
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
