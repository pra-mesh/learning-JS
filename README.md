# learning-JS
## Git Commands
git config --global user.name "<github_UserName>"
git config --global user.email "<github_Email>"
1.	Clone
    =>	git Clone <git project URL>
2.	Add
    => git add .
    => git add <file-name>
3.	Commit
    => git commit -m “commit message”
4.	Push
    => git push origin <branch>

## Javascript
 -Programming language of the 'web'
### What we will cover
 1. Variables/Hoisting
 2. Comments
 3. Interactions
 4. Data Types
 5. Operators
 6. Loops
 7. Fuctions
 8. Arrays
 9. Objects

## Variables-hoisting
Variables are containers of data.
 <br/>
 const\let\var
 const/let/var keyword is usually used to define varaible
 var was introduced in ES5 (ecmascript5)
 const/let was introduced in ES6
 var and let can be overriden after variable is overriden 

 #### Differnce between const/let/var

## Interactions
This features is used to connect variables and user interface.
Keywords:
 a. Alert- alert the users by sending any kind of message
 b. Promt - ask users to input value
 c. Conmfirm - Yes or No.

## Data Types
1. String let color ="Yellow";
2. Number let weight ="7.5";
3. Bigint let hugeString = BigInt ("900719925474099") //900719925474099ln
4. Boolean let x = true;
5. Undefined let x;
6. NUll let foo = null; //foo has no type and value --- learn more about it
7. Symbol //symbols are notation to create unique ID Eg: const s = Symbol("Pramesh")
8. Object const person = {fistName:"John", lastName:"Doe"};
Note sd
By default JS takes all variable as an string so whenever a variable with stirng and numeric value we try to 
perfom math operation it might not work.

### The object Data Type (Complex Data Type)
The object data type can contain:
1. An object
2. An array
3. A date

### Type Conversion / Type Coercion
 Type conversion are explicit usually
## Comment
1. Single Line Comment //
2. Multi Line Comment /**/

## Statement
 ### Conditional Operator
ES5
1. If Else
2. Switch Case

ES6
1. ternary operator
 It is also called conditional operator with inline condition check;
##### === strict value checking than == as the possiblity of condition with === is only either true or false

### Logical Operator
1. AND (&&) : all contiton met
2. OR (||) : Any contion met
3. NOT ! : Negative checks null, "", false, undefined
 

## Loops
 To execute certain block of code for certain iteration
###Types
1. For   : for(start;check;increment/decrement)
2. do...while
3. while

## Function
=> function are building blocks
=> they allow code to be called many times without repetition. (DRY);
### Syntax
#### ES5
``` JS
 function <fn-Name> (input){
     //logic
    //return
 }
```

1. Arrow Function (ES6)
2. Default Function
3. Parameterized Function
4. Closure
5. IIFEs
6. Explicit Function
7. Implicit Function
9. Inline Function
10. Callback Function
11. Pure function

#### ES6 or Arrow function
```js
const sum = (num1, num2) =>{
return num1 + num2;
}
```
#### Default Function 
It is used to set value of arguments of parameters with default value;
```js
const pagination =(page) =>{
    return `page number ${page}`;
}
```
#### Parameterized function
If you need to pass the specify each parameter value to control the argument passing parameterized function is used
```js
const users = ({user1, user2 ="user", user3}) =>{
    return `${user1},${user2},${user3}`;
}
console.log(user({user1:"p", user3:"m"}));
```

#### IIFEs (Immediately Invoked Functional Expression)
``` js
(()=>{
    console.log("IIFE")
})();
```

##### Function can return primitive DataType /complex DataType / function

#### Closure
Whenever you need to return function we use closure

``` js

const counter = () => {
    let count 1;  //Private variable OR LOCAl variable
    return ()=>{
    const increment = count +1;
    return increment;    
    };
}
const counterA = counter();
const counterB = counter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());


```
##### Benifits
- Data encapsulation
- 

#### Explicit Function
```js
const summer =() => {
    return 0;
}
cost addition =(a, b) => {
    return a+b;
}
```

#### Impicit Function
``` JS
const summer = () => 0;
const addition = (a,b) => a+b;
console.log(summer());
console.log(addition());
```

#### Anonymous Function
- Function without function name;
- used in logging;
```js
const test = function () {
    console.log("test");
    return;
}
test();
```

#### Inline function
```js
    const testInline = function () {};
```

#### Callback Function
It is a function that accepts another function as an parameter.
```js
const print = (data) => {
    console.log(`Hello ${data}`);
    return;
} 

const main  = (user = "user", callBackFn) =>{
    const information = `Mr ${user}`;
    return callBackFn(information);
}
main("Pramesh", print);
```

#### Pure Function (Utilities function)
Fuction whose result doesn't change for same input

### What is hoisting?
### Waht is block vs scope fuction?

## Scope
### Private variables
### Local Variables
### Global varaibales
### Lexical Scoping
### Closure Concept => 


## Complex Data Type
- Object
- Array
- Date

### Why complex datatypes?
1. Multiple Datatyes exists within Complex Data type
2. CRUD (Create read update delete)

### Object
### Create
``` js
const person = {}; // Functional based concept
const persons =  new Object{}; // Class bases concept

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
    } //es6 function is local scoped so this wont point the laptop object instead points to browser making the result NaN
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
```
