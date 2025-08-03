console.log("Timing Function in JS");
console.log("start");

let display=()=>{
    console.log("I am display function...");
}

// ! setTimeout
//setTimeout is used to display the function after some time(specific time)and it willprint only once

setTimeout(display,5000)

setTimeout(()=>{
    console.log("HAPPY BIRTHDAY 🎈🎉🎉🎉🎈");
},4000)

let x =setTimeout(()=>{
    console.log("HI");
},1000)

//! clearTimeout
//used to stop 
clearTimeout(x)

// ! setInterval
//setInterval used to print in same interval of time(if we give the interval in 1 sec the message will get print evert 1sec)

// setInterval(()=>{
//     console.log("Hi");
// },1000)

let sorry =()=>{
    console.log("I am sorry.....")
}

let interval = setInterval(sorry,1000)

//! clearInterval
//used to make them to stop
clearInterval(interval)

console.log("end");