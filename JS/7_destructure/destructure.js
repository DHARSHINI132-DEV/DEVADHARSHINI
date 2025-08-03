let student ={
    sname : "ajay",
    age:15,
    phNO:1234567890,
    email: "ajay@gmail.com",
    city:"chennai"
}

console.log(student.phNO)
console.log(student.email)


// !   Object Destructure
// {} inside this we need to use the name same as the key

   let  {sname, age,city,email,phNo}  = student
   
   
   console.log(sname)
   console.log(age)


// !   Array Destructure 
// we can use any variable name here

let arr =['html','css','js','react']


  let [sub1 , sub2 , sub3]  = arr

  console.log(sub1)
  console.log(sub2)
  console.log(sub3)



//   !    rest parameter 


// The rest parameter is used to group the remaining elements into an array.

// It collects "the rest" of the arguments that were not explicitly specified.

// The rest parameter is represented by three dots (...) 

let display =(a,b, ...c)=>{

    console.log(a)
    console.log(b)
    console.log(c)
}

display(2,3,4,5,6,7,8,9)




// !  spread operator 

// The spread operator in JavaScript allows  to expand an array, object, or iterable into individual elements.

// It is often used to copy, merge, or pass elements.

// The spread operator is represented by three dots (...)

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1, ...arr2]

console.log(arr3)


// !  rest and spread together

let arr4 = ['html','css','js','react','node','express']


let [subject1 , subject2 , ...subjects ] = [...arr4]

console.log(subject1)
console.log(subject2)
console.log(subjects)


// !  shallow copy 


// A shallow copy of an object is a new object that is a copy of the original, but it only copies the references of nested objects instead of creating new instances. 

// This means that if the original object contains another object as a property, changes to the nested object in the copy will affect the original and vice versa.

// when ever any change is done to the copied variable or original variable the vice versa variable values also get modified this is know as shallow copy.

// this is because they share the same reference address not the object.


let arr5 = [2,3,4,5,6]

let copy = arr5 

console.log(copy)

copy.push(100)

console.log(copy)

console.log(arr5)  


// !  deep copy 

// To overcome the disadvantage of shallowcopy we use deep copy 

// here modification in one will not affect the other

// A deep copy creates a completely independent clone of the original object, including all nested objects. Changes to the copied object do not affect the original.

let arr6 = [1,2,3,4,5]


let copy2 = JSON.parse(  JSON.stringify( arr6))

console.log(copy2)
copy2.push(100)
console.log(copy2)
console.log(arr6)