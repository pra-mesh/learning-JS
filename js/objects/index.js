const person = {}; // Functional based concept
const persons =  new Object (); // Class bases concept

conole.log (person, typeof person, persons, typeof persons)

const laptop = {
    brand : "apple",
    model: "macbook air",
    modelYear: 2024,
    age : function() {
        return 2025 - this.modelYear; // 2024
    },  ///es5 this function is global scoped and is hoisted and points the laptop object
    ageNew : () => {
        return 2025 - this.modelYear
    }, //es6 function is local scoped so this wont point the laptop object instead points to browser making the result NaN
    ageES6 : () =>{
        return 2025 - laptop.modelYear
    }
}

// Read (using . notation with key)
console.log(laptop.brand);
console.log(laptop.age()); //1
console.log(laptop.ageNew()); //NaN
console.log(laptop.ageES6()); //1

//Update
laptop.brand ="Dell";
console.log(laptop)
//

//Delete
delete laptop.brand;
console.log(laptop)