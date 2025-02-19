// Write CRUD operation for student object data
const student = {
    name : "Pramesh",
    class : "X",
    rollNO: 12,
    fee:5000,
    dueAmount :(noofmonth = 0)=>{
        return student.fee *noofmonth;
    }
}

console.log(student);
console.log(student.name);
console.log(student.dueAmount(5));
student.class = "XI";
student.fee = 6000;
console.log(student.dueAmount(2));

delete student.class;
student.standard = "V";
console.log(student)

