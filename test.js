// Asked about variables


// dataType => [string,number,boolea,null,undefined,object]

// let vs var vs const
// const num = 2;
// num = 5;
// console.log(num)


// var a = 2;
// {
//     let b=3;
//     console.log(b);
// }

// console.log(a);
// console.log(b);



// console.log(a);
// var b;

// // 1000

// // let => block element
// // var => global element

// // console.log(a);

// var a=2;

// {
//     let b = 2;
//     console.log(b)
// }

// let b = 3;
// console.log(a);
// console.log(b);



// setTimeout(function temp(){
//     console.log("temp")
// },1000)


// setTimeout(function(){
//     console.log(i)
// },1000)

// for(var i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000);
// }

// typeof operater
// => varaible has contain some value => 

// let num = 2;
// num = "hjgdswy"
// typeof


// add two number
// function add(num1,num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         console.log("data is not in vaild format")
//         return;
//     }
//     return num1+num2;
// }


// console.log(add(2,3))



// undefined and null

// let x;

// let y = null;

// console.log(typeof x);
// console.log(typeof y);


// ifElse

// Number

// add two number
// function add(num1,num2){
//     return Number(num1)+Number(num2);
// }


//  let addEle = add('4','3');
//  let addEle1 = add('abc','3');



// console.log(NaN === NaN)
// console.log(NaN == NaN)
// Not a Number never equal to Not a Number


// It always run else statement if we compare NaN == NaN || NaN === NaN
//  if(addEle === Number.NaN){
//     console.log("Value is in not valid format")
//  }else{
//     console.log(addEle);
//  }

// We use method provided by Number object
//  if(Number.isNaN(addEle)){
//     console.log("Value is in not valid format")
//  }else{
//     console.log(addEle);
//  }


// console.log(typeof NaN)
// console.log(add('abc',3))

// let temp = (2+6)/3+4;

// console.log(temp);


// increament and dcreament

// let num = 2;
// console.log(num += 1);

// num += 1; // num = num + 1;

// console.log(num)
// const num = 3;
// console.log(num++);

// String

// let num = "Hello wrokd 6549ghcvbvngfhjkghhjhj['[;";

// let num1 = bwjbdjbsc cdjbcjkebs

// let num = "I'm Jitu Rajak ${} "

// loop

// for(let i=0;i<5;i++){
//     console.log(i);
// }
// slice => s,e = 5,9
// let ans = "I am Jitu Rajak"
// let ans1 = "I am Vishal Rajak"
// let and3 = "I am Khushi Kumari"

// let firstName = ans.slice(5,9);
// let firstName = ans.substring(5,9);
// let firstName = ans.substr(5,4);

// console.log(firstName)



// length => length of the string
// console.log(ans.length)

// "Hello"

// let ans1 = "hello";
// string => collection of character
// console.log(ans1[0])

// console.log(ans1.charAt(0))

//let num = "check"; //"kcehc"

// let ans = num.split('')


// let ans = "I am Jitu Rajak";

// let num = ans.split(' ')

// console.log(num)


// console.log(ans);


// Loop

// let obj = {
//     firstName : "Jitu",
//     lastName : "rajak"
// }



// console.log(obj.firstName)

// let ans = "hello";


// let ans1 = {
//     0 : 'h',
//     1 : 'e',
//     2 : 'l',
//     ..
// }


// for(let i=0;i<ans.length;i++){
//     console.log(ans[i]);
// }

// let i=0;
// while(i<ans.length){
//     console.log(ans[i]);
//     i++;
// }

// for(let ele in obj){
//     console.log(obj[ele])
// }


// Array

// let ans = ['I',"am","Jitu","Rajak"];

// console.log(ans.join('-'))



// ans.push("hello")

// console.log(ans)

// ans.pop();

// console.log(ans)


// let ans = [[1,2],[2,[3,4]]];


// ans.splice(1,0,"good","hjgjhn")

// console.log(ans.flat(2))

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // document.getElementById("demo1").innerHTML = fruits;

// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits)

// let ans1 = ["I","am","Jitu","Rajak"]

// console.log(ans1.reverse())


// let ans = "hello";

// let ans1 = ans.split('').reverse().join('');

// console.log(ans1);


/*

using javascript put green in 1 to 4 and 5 <= yellow and leftover with red

1. Intrpduction of html,css Javascript
2. DOM Introduction
3. Javascript Intorduction
4. String, Loop and Array
5. Function
6. Object
7. ReactJs
8. Nodejs & MongoDB

*/


// Function

// function add(num1,num2){
//     return num1 + num2;
// }

// const add1 = function(num1,num2){
//     return num1+num2;
// }


// const add1 = (num1,num2) => {
//     return num1+num2;
// }


// console.log(add1(2,3))


// object is collection key value pair

// let person = {
//     firstName : "Jitu",
//     lastName : "Rajak",
//     getFullName : function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Person{
// 	constructor(firstName,lastName){
//     	this.firstName=firstName;
//       	this.lastName=lastName;
//     }
//   	getFullName(){
//     	return `${this.firstName} ${this.lastName}`;
//     }
// }


// let person1 = new Person("Jitu","Rajak")
// let person2 = new Person("siya","kumari")
// let person3 = new Person("sanjeev","Kumar");

// console.log(person2.getFullName())



// console.log(person.getFullName());


// let ans="I am Jitu Rajak"

// ans.split(' ');


//


