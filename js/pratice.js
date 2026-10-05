/* let a=10;
let b="vinod";
let c=true;
let e=10.20

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(e));


console.log(a);
console.log(b);
console.log(c);
console.log(e)

var a='vinod';
let b=2;
console.log(a+b)


//operators

//Arthamatic operators

let a=10
let b=10

console.log("additon ",a+b);
console.log("subtraction",a-b);
console.log("multiplication ",a*b);
console.log("division ",a/b);
console.log("expotension ",a**2);
console.log("incrment ",++a);
console.log("decrement ",--a);


let a="vinod"
let b=10
console.log(a!=b);4


//check the age between 18 and 50

let a=17
let b=17

if(!(a>18)){
    console.log("age statisfied")
}else{
    console.log("age not statisfied")
}

//checking age of a person above 50 or not 

let age=49

let result=age>50?"age is greater than 50": "age is less than 50";

console.log(result)
    

let a="3"+true
console.log(a);


let result="1"
result=Boolean(result)
console.log(result)
console.log(typeof(result))
    

let a='hello this is vinod kumars brother';
//console.log(a)
//console.log(a.length)
console.log(a.charAt(7))
console.log(a.indexOf("v"))
console.log(a.toLowerCase())
console.log(a.toUpperCase())



let a="1"

if (a=="1"){
    console.log("this is if block")
}else if (a=="1"){
    console.log("this is else if block")
}
else{
    console.log("this is else block")
}
    
let grade="A"

switch(grade){
    case "A":
        console.log("outstanding")
        
    case "B":
        console.log("excellent");
     
    case "C":
        console.log("need improvement")
        
    case "D":
        console.log("margin pass")
        
    default:
        console.log("fail")
}
        
let a=1
while(a<=10){
    console.log("number "+a)
    a++
}
console.log("exectuion succeesfull")


for( let a=1; a<=20;a++)
{
    console.log("page no : "+a)
    if(a===10){
        console.log("continue statemet excute");
        continue;
    }
}


car()
let a=10

if(a > 5){
    let b="vinod"
    var c="kumar"

    console.log("this is block scope")
}

console.log(a)
console.log(c)

function car(){
    var carname="tata"
    console.log(carname)
}



function add(a,b){
    return "addition of two numbers ",a+b;
}

console.log(add(5,5));


//alert("this is vinod kumar")
let a=prompt("enter your name")

if(a){
    alert("hello "+a)
}
else{
    alert("user not entered name")
}


let a=prompt("enter your name ")

let b=confirm("are you ok with it")

document.write("hello "+a+" this is js session")

let person={
    name:"vinod",
    age:20,
    gender:"male"

}
console.log(person.gender.length)
person.city="kurnool"
console.log(person)
person.age=26
console.log(person)

delete person.age
console.log(person)

delete person

console.log(person)

// constructor with new keyword and this refer the instance
function person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log("hello "+name)
    }
}

let p=new person("shashi",23)
console.log(p.name)
console.log(p.age)
p.greet()

//es6 modern js constructor style
//a constructor is a special function used to create and initialize objects.
//  It provides a blueprint for creating multiple objects with similar properties and methods.

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.display=function(){
            return "hello "+name+" welcome back to college"
        }
    }
}

let s1=new student("vinod",23)

console.log(s1.name)
console.log(s1.age)
console.log(s1.display())

function createobject(name,age){
    this.name=name;
    this.age=age;
    this.changename=function cn(a){
        this.name=a
    }
}


var p1=new createobject("vinod",12)

console.log(p1.name)
console.log(p1.changename("kumar"))

//creating array
//arrary is a processe of colleting hetergenous elements that means arrary can store all types of data and
//  array is mutable so we cam modify the array at any position

//creating array using array keyword
var courses=new Array("html","css","js")

//creating array using let keyword
let c=[1,2,3,4,5,67,4,5,4,6,4,3,7,4,36]

var ar1=[1,2]
var ar2=[3,4]

console.log("length of the array ",c.length)
console.log("index of the given element ",c.indexOf(5))
c.sort()
console.log("sort the given array ",c)
console.log("before poping ",ar1)
console.log("poping element form the array ",ar1.pop())
console.log("after poping the element ",ar1)
ar1.push(2,3)
console.log("after pushing the element into array ",ar1)



//The Math object in JavaScript is a built-in object that provides mathematical constants and functions.

console.log("pie value: ",Math.PI); 
console.log("Euler number: ",Math.E);    
console.log("round the number: ",Math.round(4.6)); 
console.log("Rounds up the number : ",Math.ceil(4.2));  
console.log("Rounds down the number: ",Math.floor(4.9));
console.log("number after Remove the decimal part: ",Math.trunc(4.9));
console.log("power of 2 :",Math.pow(2, 3)); 
console.log("square of 16 : ",Math.sqrt(16));  
console.log("absulote values ",Math.abs(-10)); // negative valus converts positive
console.log("minimum value: ",Math.min(3, 5, 1, 9)); // we get a minimum value
console.log("maximum value: ",Math.max(3, 5, 1, 9)); // we get a maximum value
//Random decimal between 0 and 1
console.log("randome number b/w 0 and 1 :",Math.random());
console.log("andome number b/w 0 and 1 :",Math.floor(Math.random()*10)); 
*/


//date objects 
//the date object in javascript is used to work with dates and time 
//it allow you to create, format and manuplation 
//creating a date object uing new constructor
var dt=new Date()
console.log("full date object: ",dt)//getting the full date and time
console.log("year: ",dt.getFullYear())//it returns the full year
console.log("month: ",dt.getMonth())//it returns the monthe of the year
console.log("date of the month: ",dt.getDate())//it returns the day of the month 
console.log("hours in gobal time: ",dt.getHours())//it returns the hours
console.log("minutes: ",dt.getMinutes())//it returns the minutes
console.log("seconds: ",dt.getSeconds())//it returns the seconds
console.log("milli seconds: ",dt.getMilliseconds())//it returns the milli seconds
// we are  manuplate a date and time using formatting strings
console.log("local full date: ",dt.toDateString())
console.log("local time: ",dt.toLocaleTimeString())
console.log("local date: ",dt.toLocaleDateString())
console.log("local Time(12 hour): ",dt.toLocaleTimeString())

//REAl TIME: date objects is powerful for time calculations, scheduling,formatting and real time apps