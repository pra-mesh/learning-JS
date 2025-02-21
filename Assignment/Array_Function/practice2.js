const votes = [
    "balen",
    "kp",
    "balen",
    "raktim",
    "balen",
    "raktim",
    "kp",
    "prachanda"
]
const voting =() =>
    votes.reduce((acc,vote)=>{
        if(!acc[vote]){
            acc[vote]=0;
        }
        acc[vote]++;
        return acc;
    },{});
console.log(voting());

const votingMapandSet = () =>{
    const voteMap = new Map();
    votes.forEach(vote =>{
        voteMap.set(vote,(voteMap.get(vote) || 0)+1);
    });
    return {voteMap};
}
console.log(votingMapandSet());

let range = {
    start:10,
    end:20,
}

//Write a program which can return a boolean
// if value is present in the range with given start and end values in an object
//5 in range; // false
//25 in range; // treue

const inRange = (value =0, range) =>  obj
     value >= range.start && value <= range.end;

console.log(inRange(5,range));
console.log(inRange(25,range));