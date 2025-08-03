// clg or log --> short to get console.log() statement
console.log("Iam external javascrpit");

// ⚡how many ways we can declare variable ??  1.let   2.var   3.const

// 1.let
let myName //variable declaration

myName= "virat" // variable initialization

let myAge =35  // variable declaration and Initialization

console.log(myName)
console.log(myAge)

// 2.var
var phNo = 9876543210;

var city

city="Chennai"


console.log(phNo)
console.log(city)

var city="Madurai"
console.log("re-declarating the city : "+city)

// in var keyword we can do re-declaration but in let keyword we can not do re-declaration

// 3.const
const aadharNo=987654321098776

console.log(aadharNo)


//⚡ datatypes
// 1.primitive
// --->i.number 

let eid=2112
let salary=1000.50

// ❗❗typeof❗❗

// typeof operator  is used to know the datatype of the variable

console.log(eid)
console.log(typeof eid)


// --->ii.String
let emp1="rahul"
let emp2='bumrah'
let emp3=`gill`

console.log(typeof emp1)
console.log(typeof emp2)
console.log(typeof emp3)

// --->iii.boolean
 let isMarried =false
 console.log(typeof isMarried)

 let hasChild=true
 console.log(typeof hasChild)

// --->iv.undefined

// any variable declared but not initialized, is called undefined
// typeof undefinded is undefined
let empPhno
console.log(empPhno)

// --->v.null

// currently don't know the value but later on it will be updated then initialize variable as null
// typeof null is object

let empSal = null
console.log(empSal)

// --->vi.bigint
// similar to long .Here. we use n  as suffix in bigint instead of l as suffix in long
let count=2n
console.log(count)
console.log(typeof count)

//non primitive datatype
// 1.Array
let arr = [10,"san",true,undefined,[30,40]]
console.log(arr)

//2.Function
function display(){
    console.log("Iam display function..");  
}
display()

//3.Object
let student={
    sname:"virat",
    age:10,
    location:"bangalore"
}
console.log(student);

// !  variable hoisting 


// if we are accessing any variable before its declarion, and the variable has declared by var keyword then this declaration part will be moving to the top and it will give the output as undefined. it is called variable hoisting.

// variable hoisting is possible for only var keyword not for let and const.


console.log(a)

var a = 30

if(true)
{
    let b = 20
    const c = 30 
    var d = 40
    console.log("inside if block")
    console.log(b)
    console.log(c)
    console.log(d)
}

console.log("outside if block")

// console.log(b)
// console.log(c)
console.log(d)

