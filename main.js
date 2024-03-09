// import inquirer from "inquirer";
// import chalk from "chalk";
// let answers = await inquirer.prompt({
//     name : "age",
//     type : "number",
//     message : "Enter Your age below: "
// })
// console.log(chalk.cyan(`In `+(60-answers.age)+ ` years wou will be 60 years old`))
// let a = 2;
// let b = 3;
// let isEqual = (a==b);
// let isNotEqual = (a!=b);
// let isGreaterThan = (a>b);
// let isLessThan = (a<b);
// console.log(isEqual,isNotEqual,isGreaterThan,isLessThan)
// let isRaining = true;
// if (isRaining) {
//     console.log("Wear Raincoat.")
// } else{
//     console.log("Wear Sunglasses.")
// }
// let Weather = "Cloudy";
// if (Weather =="Rain") {
//     console.log("Wear Raincoat.")
// } else if(Weather =="Cloudy"){
//     console.log("Wear Jacket.")
// }else{
//     console.log("Wear Sunglasses.")
// }
let isRaining = true;
let wear = isRaining ? "Wear Raincoat" : "Wear Sunglasses";
console.log(wear);
export {};
