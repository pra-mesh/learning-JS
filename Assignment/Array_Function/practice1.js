const foodA =["Noodle", "Pasta", "Ice-cream","cake"];
const foodB =["Fries", "Ice-cream", "Pizza","cake"];
// Compare the 2 arays and find common food if any. "Ice-cram"

const commonFood = () => foodA.find(a => foodB.includes(a));
console.log(commonFood());

const userRoles = ["user","manager", "guest"];
const pageRoles = ["admin", "manager"];
// Is the user allowed to access return boolean result
const hasAccess = (user = [], page= 90) => user.some((role) => page.includes(role));
console.log(hasAccess(userRoles,pageRoles));


const data = [1,2,3,4,5,6,7,8,9,10];
const nextPage = (pageNo=1, limit =5) => //data.slice((pageNo-1*limit),((pageNo-1*limit)+ limit));
{
    const start = (pageNo-1)*limit;
    const end = start + limit;
    return { data: data.slice(start,end), total: data.length, page: pageNo , limit: limit};
}

console.log(nextPage(1,5));

const unsorteData = [{name:"Ram", age:10},{name:"ash", age:100},{name:"Sita", age:100}];
// sort in ascending order based on age
sorByAge = () => unsorteData.sort((a,b) => a.age - b.age);
console.log(sorByAge());
sorByName = () => unsorteData.sort((a,b) => a.name.localeCompare(b.name));
console.log(sorByName());
// slice vs spliced
// slice is immutable and spliced is mutable i.e when slice new array
//  is created and original array is not changed but in splice original array is changed