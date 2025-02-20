const entity = [];
const entities = new Array();

const group = ["Pramesh", "ram", "raktim"];
const groups = [
    {
        name : "ram shrestha",
        joindeFrom : "1st Feb, 2025",
        isFullTime: true
    }
]

// Read
console.log(group[0]);
console.log(groups[0]);

//Update
//ES5
group[0] = "Pramesh Pradhan";
console.log(group);


//Delete
delete group[0];
console.log(group);

// using array method
// ['r', 'a','k'] =>['a','k']
const a1 = ['r', 'a','k'] ;
console.log(a1.shift());
console.log(a1);
a1.push("r");
console.log(a1);

//ES6
// Destructuring objects/array using Spread Operator

const obj1 ={
    name: "Pramesh",
    password: "abc",
    role: "admin"
}
const {password, ...rest1} = obj1;
console.log(obj1);
console.log(rest1);
const {email = "pra@pra.com", ... a3} = obj1;
console.log(a3);

const users = ["raktim","Pramesh","Aayushman"]
//Spreads with Destructture
const [a,b, ...rest3]= users;
console.log(rest3);

//CRUD
//Array Method
//Destructure
//Immutable Js : instead of using original data we leave it intact and instead
                //use a copy of data 
    //by default data should be immutable

//Ummutable Js methods
// map, filter, reduce, find, some, every

const students = [{
    name: "pramesh pradhan"
},
{
    name:"binaya dhital"
}
];
const newStudents = students.map((student) => student.name.toUpperCase());
console.log(newStudents,students)