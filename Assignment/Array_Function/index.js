const characters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
    },
];
//Map
//1. Get an array of all names
const getNames = () => characters.map((chr) => chr.name);
console.log(getNames());
//2. Get an array of all heights
const getHeights = () => characters.map((chr) => chr.height);
console.log(getHeights())
//3. Get an array of objecs with just name and height properties
const getNameHeight = () => characters.map((chr)=>({name:chr.name, height:chr.height }))
console.log(getNameHeight());
//4. Get an array of all first names
const getFirstName = () => characters.map((chr) =>chr.name.split(" ")[0] );
console.log(getFirstName());

//Reduce
//1. Get the total mass of all character
const totalMass = () => characters.reduce((acc,chr)=> acc + Number(chr.mass),0);
console.log(totalMass());

//2. Get the total height of all characters
const totalHeight = () => characters.reduce((acc,chr)=> acc + Number(chr.height),0)
console.log(totalHeight());

//3. Get the total number of characters in all the character names
const totalCharacterName = () => characters.reduce((acc, chr) => acc +chr.name.length,0);
console.log(totalCharacterName());

//Get the total number of characters by eye color
const totalEyeColorNo = () => characters
.map(character => character.eye_color)
.reduce((acc, eye) => {
    if(!acc[eye]) {
        acc[eye]=0
    }
     acc[eye]++;
    return acc
}
 ,{});
console.log(totalEyeColorNo());

//Filter
//1. Get characters with mass greater than 100
const massGreaterthan100 = () => characters.filter(chr => chr.mass>100);
console.log(massGreaterthan100());

//2 .Get characters with height less than 200
const heightLessthan200 = () => characters.filter(chr =>chr.height<200);
console.log(heightLessthan200());

//3. Get all male characters
const maleCharacters = () => characters.filter(chr => chr.gender.toLowerCase()==="male");
console.log(maleCharacters());

//4. Get all Female Characters;
const femaleCharacters = () => characters.filter(chr => chr.gender.toLowerCase()==="female");
console.log(femaleCharacters())

//sort
//1. Sort by name
const sortByName =() => characters.sort((a,b) =>{ const nameA = a.name, nameB = b.name; return nameA===nameB? 0 : 
    nameA<nameB? -1:1 } );
console.log(sortByName());
//2. Sort by mass
const sortByMass = () => characters.sort((a,b)=>{
    const massA = +a.mass, massB = +b.mass;
    return massA=== massB? 0: massA<massB? -1 :1;
})
console.log(sortByMass());
//3. Sort by height
const sortByHeight= () => characters.sort((a,b)=>a.height-b.height).map(chr => chr.height);
console.log(sortByHeight());

//4. Sort by gender
const sortByGender= () => characters.sort((a,b)=>{
    const genderA = +a.gender, genderB = +b.gender;
    return genderA=== genderB? 0: genderA<genderB? -1 :1;
})
console.log(sortByGender());

//Every
//1. Does every character have blue eyes?
const blueEye = () => characters.every(chr => chr.eye_color === "bkue");
console.log(blueEye());

//2. Does every character have mass more than 40?
const massMorethan = (value =0) => characters.every(
    chr => chr.mass>+value
);
console.log(massMorethan(40));

// 3. Is every character shorter than 200?
const shorterthan = (value = 0) => characters.every(chr =>
    chr.height<+value
);
console.log(shorterthan(200));

// 4. Is every character male?
const isMale = (value = "male") => characters.every( chr =>
    chr.gender === value
);
console.log(isMale("male"));

// Some
// 1. Is there at least one male character?
const hasMale = (value = "male") => characters.some( chr =>
    chr.gender === value
);
console.log(hasMale("male"));
//2. Is there at least one character with blue eyes?
const hasBlueEye = (value = "blue") => characters.some( chr =>
    chr.eye_color.toLowerCase() === value
);
console.log(hasBlueEye("blue"));

//3. Is there at least one character taller than 200?
const hasTallerThan = (value = 0) => characters.some( chr =>
    chr.height > +value
);
console.log(hasTallerThan(200));

//4. Is there at least one character that has mass less than 50?
const hasMassLessThan = (value = 0) => characters.some( chr => chr.mass > +value);
console.log(hasMassLessThan(50));
