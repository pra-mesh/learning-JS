//Write a s js function that converts string to lower case.
const toLower = (text = "") => String(text).toLowerCase();
console.log(toLower("PRAMESH PRADHAN"));
console.log(toLower(123));

//Write a js function to convert long text to ...
    //"Ram is a teacher at Broadway" => "Ram is a ..." (trauncate)

const longValue = (longtext = "") =>  String(longtext).slice(0,9)
                                        .concat(" ", "..."); // `${String(longtext).slice(0,9)} ....`;
const textlength =(longtext, longValue) => longtext.length<10? longtext :  longValue(longtext);

console.log(textlength("Ram is a teacher at Broadway", longValue))
console.log(textlength("Hello Ram", longValue))
//Write a js function to vonvert text to slug
//:Raktim is a teacher" => "raktim-is-a-teacher"

const slugVal = (val = "") => 
    String(val).toLowerCase()
.replaceAll(" ", "-");
console.log(slugVal("Raktim is a teacher"));

//Write a function to check if the phone number is a mobile number or not
//10 digits
// phone number starts with 98
const isPhoneNumber = (val = "9800000000") =>   
    val.length !==10 || val.slice(0,2) != "98"
    ? false 
    : true;
console.log(isPhoneNumber("9841362926"));

//Write a js function ato create a proper case
// "raktim shrestha" => "Raktim Shrestha"
const properCasing = (val = "") => {
   let properCased ="";
   let index = val.indexOf(' ');
    properCased=val.charAt(0).toUpperCase().concat("", val.slice(1,index).toLowerCase());
    while (index !== -1) {
        let previousIndex = index;
        index = val.indexOf(' ', index + 1);
        if(index === -1) 
        {
        properCased = properCased.concat(" ", val.charAt(previousIndex + 1).toUpperCase().concat("", val.slice(previousIndex +2).toLowerCase()));
        }
        else
        {
        properCased = properCased.concat(" ", val.charAt(previousIndex + 1).toUpperCase().concat("", val.slice(previousIndex +2,index).toLowerCase()));
        }
    }
    return properCased;
}

const propCasingWithFor = (val ="") => {
    let properCased ="";
    let wordStart = true;
    for(let i =0; i <val.length; i++){
        if(val[i]===" "){
            properCased = properCased.concat("", " ");
            wordStart = true;
        }
        else {
            if(wordStart){
                properCased = properCased.concat("", val[i].toUpperCase());
                wordStart = false;
            }
            else{
                properCased = properCased.concat("", val[i].toLowerCase());
            }
        }
    }
    return properCased;
}
console.log(propCasingWithFor("mAusam dHakal"));

// const indexOfNextChar =(data = "") => {
//     let indexvalue = data.indexOf(" ");
//     return() =>{
//         return data.indexOf(' ', indexvalue+1);
//     };
// }

// const indexval = indexOfNextChar("Hello world Pramesh");
// console.log(indexval())

// Write a js function to clean the data
//"           Raktim           Shrestha    " => "Raktim Shrestha"

const cleanData = (val = "") => val.trim().replace(/\s+/g,' ');
console.log(cleanData("           Raktim           Shrestha    "));


// Write a  js function to convert any number to formatted number
// 1000 => 1,000
// 10000 => 10,000

const formatToMoney = (balance = 0) =>{
    return balance.toLocaleString('en-IN');
}
console.log(formatToMoney(100000));
const formating = (balance = 0) => {
    for(let i =balance.length-3; i>3; i-=3){
        balance = balance.slice(0,i)+","+balance.slice(i);
    }
    return balance;
}

console.log(formating(10000));
//Write a js function to check if the string contains the word or not
// "Raktim is a teacher" => Search Teacher => true
// "Raktim is a teacher" => Search father => false
const checkIfExist = ({text ="", searchValue =""}) =>  text.toLowerCase()
                                                        .includes(searchValue.toLowerCase());
console.log(checkIfExist({text:"Raktim is a teacher",searchValue:"Teacher"}));
console.log(checkIfExist({text:"Raktim is a teacher",searchValue:"father"}));