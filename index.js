






























































const students = [
    { name: "Anna", age: 15, endShool: new Date() },
    { item: "Fred", age: 14,endShool: new Date() },
    { item: "Lusy", age: 17, endShool: new Date() }
];
const jsonString = JSON.stringify(students);
console.log(jsonString);
const parsedSudents = JSON.parse(jsonString, (key, value) => {
    return key === "endShool" ? new Date(value) : value;
    
});
console.log(parsedSudents[0].endShool.getFullYear());