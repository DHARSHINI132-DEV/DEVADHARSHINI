//  promise is a javascript object.
// it will take one callback function which has two parameter.resolve,reject (these are the two possiblilities)
// it will show result in key:value pair

// states
// 1. pending -->while creating the promise it will be in the pending state
// 2.fulfilled -->resolve executed then it will be in fulfilled state
// 3.rejected state -->reject executed then it will be in rejected state

let p = new Promise((resolve , reject )=>{
    // resolve(" data is present.....")
    
    //reject("sorry... data is not present...")
    let givingMock=true
    if(givingMock){
        resolve("mock given")
    }
    else{
        reject("not given mock")
    }
})

console.log(p)

// Methods to display only the data not the object :
// both method(then(), catch()) will take one callback function
// 1.then() -> used to handle resolve
// 2.catch()-> used to handle reject
// 3.finally()-> it is used to check whether promise is present or not.finally()will execute,it will not bother whether then(),catch() executed or not.

p.then((data)=>{
   console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally( console.log("promise is there"))
