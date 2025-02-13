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

### What is hoisting?
### Waht is block vs scope fuction?
