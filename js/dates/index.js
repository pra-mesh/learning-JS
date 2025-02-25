//Timestamp

//CRUD
//Create
const oldDate = new Date("2020-01-01");
console.log(oldDate);
const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getUTCDate());
console.log(currentDate.getTimezoneOffset());

//formating date
console.log("2025-02-06T13:21:33.506+00:00");

console.log({ toDateString: currentDate.toDateString() });
console.log({ iso: currentDate.toISOString() });
console.log(currentDate.toLocaleString());
console.log(currentDate.toString());
console.log(currentDate.toUTCString());
console.log(currentDate.toJSON());
console.log(currentDate.getTime());

const birthDay = new Date("1992/08/05");

const nextBirthday = ({ oldDate = new Date(), newdate = new Date() }) => {
  oldDate.setFullYear(newdate.getFullYear());
  oldDate > newdate ? oldDate : oldDate.setFullYear(newdate.getFullYear() + 1);
  return Math.round(
    (oldDate.getTime() - newdate.getTime()) / (1000 * 60 * 60 * 24) + 1
  );
};
console.log(`Your next birthday is in \
    ${nextBirthday({ oldDate: birthDay, newdate: currentDate })}`);
