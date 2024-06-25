//! Function Definition:
//? function is a fundamental concept used to define reusable blocks of code that can be executed when called upon.

//! Function Properties:
//? Function Declaration:
//? Funcion Invocation / Call:
//? Function Definition / Body:
//? Parameters:
//? Arguments:

//! Types:
//? Named Function
//? Anonymous Function
//? Arrow Function
//? Immediately Invoked Function Expression

//! Parameters:
//? Normal Parameter
//? Default Parameter
//? Optional Parameter
//? Rest Parameter

// function myFunc(){
//     console.log("Hello World!");
// }
// myFunc()


// function add(value1: number, value2: number){
// const result: number = value1 + value2
// console.log(result);
// }
// add(10,5);


// function myName(name: string): string{
//     return name;
// }
// const name: string = myName("Muhammad Fasih") 
// console.log(myName("Muhammad Fasih"));


// function oddOrEven(num: number): string{
// const result: string = num % 2 === 0 ? "Even" : "Odd";
// return result;
// }
// const myAnswer: string = oddOrEven(15)
// console.log(myAnswer);

// function myName(firstName: string, lastName: string): string{
//     const myFullName: string = firstName + " " + lastName;
//     return myFullName;
// }
// const result: string = myName("Fasih","Muhammad")
// console.log(result);

//!Normal Function
// function myFunc1(){
//     console.log("Hello World!");
// }
// myFunc1()


//! Arrow Function
// const myFunc2 = () => {
//     console.log("Hello World!");
// }
// myFunc2()


//! By using normal function
// function myName1(name: string){
//     return name;
// }
// const value1: string = myName1("Muhammad Fasih")
// console.log(value1);

//! By using arrow function
// const myName2 = (name: string) => name;
// const value2 = myName2("Salman Shahid")
// console.log(value2);



//! Anonymous Function
// const myFunc = function(){
//     console.log("Hello World");
// }


//! IIFE 
// function myName(name:string){
//     console.log(name);
// }
// myName("Muhammad Fasih")

// let myStr: string = "Muhammad Fasih";
// console.log(myStr);
// myStr = "Salman Shahid"
// console.log(myStr);

//! Default parameter
// function myName(name: string = "Muhammad Fasih"): string {
//     return name;
// }
// const result: string = myName();
// console.log(result);

//! Optional Parameter
// function add(num1: number, num2?: number): number{
//     if(num2){
//    defined
//         return num1 + num2
//     }
//     else{
//         return num1
//     }
// }
// const result: number = add(10,15);
// console.log(result);

//! rest parameter

// function myData(value1:string,...values: boolean[]){
// console.log(value1);
// console.log(values);
// }
// myData("Fasih",true,true,false)

// function myFunc(num1: number, num2: number): number {
//     const myValue: number = num1 * num2
    //                       10   *  5 = 50
//     return myValue + num1
    //       50    +  10 = 60
// }
// const myResult: number = myFunc(10,5);
// console.log(myResult);


//* MCQs

// const myNum: number = 10;
// const myStr: string = "Hello";
// const result = myNum + myStr;

// console.log(result);
// console.log(true);
// console.log("10");
// console.log(10);


// function myFunc(value: boolean){
//     const myMessage: string = !(value === false) ? "Yes" : "No";
//     //                        !true  === false
//     //!                         (false === false)    output: true
//     return myMessage;
// }
// const myAnswer1: string = myFunc(true);
// const myAnswer2: string = myFunc(false);
// console.log(myAnswer1);
// console.log(myAnswer2);

// let myValue: boolean = true;
// console.log(!myValue);



// let firstName: string = "Muhammad";
// let lastName: string = "Fasih";
// console.log(firstName , lastName);



let myNum: number = 10;

function myFunc(myNum: number){
    console.log(myNum);
    myNum = 20;
    console.log(myNum);
}
console.log(myNum);
myFunc(5);
