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
}

futarian = {
  name: 'Similoluwa',
  age: 17,
  matricNo: "NILL",
  level: 0
}
// console.log(futarian);

// EXPLICIT TYPES
let character: string | number;
character = "Toluwanimi"
console.log(character);


// ARRAYS
let siblings: string[] = [];
siblings.push('seyi', 'pelumi', 'simi');
console.log(siblings);


// UNION TYPES
let ninjas: (string | number | boolean)[] = ["ogbeni!"];
ninjas.push('alaye', 100, "idan", false, "high don", true);
console.log(ninjas);

// OBJECTS
let kickOne: object;
kickOne = {
  model: "Nike",
  name: "Sb Dunk Jarritos"
}

let kickTwo: {
  model: string,
  name: string,
  year: number,
  price: string
}

kickTwo = {
  model: "Nike",
  name: "Air Max",
  year: 2015,
  price: "$300"
}

console.log(kickOne, kickTwo); 

// DYNAMIC(any)

let kickThree: any = [];
kickThree = ["Nike Air Force"];
kickThree = false;

// FUNCTION BASICS
let greet: Function;
greet = () => {
  console.log('hello, world');
}

const add  = (a: number, b: number, c: string | number  = 10) => {
  console.log(a + b);
  console.log(c);
}

add(5,5);

const minus = (a:number, b:number): number => {
  return a - b;
}
let result = minus(1, 2);