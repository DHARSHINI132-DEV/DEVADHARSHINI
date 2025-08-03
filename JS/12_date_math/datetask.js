let showTime =()=>{
    let now = new Date()

    let time = document.querySelector(".inner")

    let t = now.toLocaleTimeString()

    time.innerHTML=`<h1> ${t} </h1>`
}
setInterval(showTime,1000)

//! Math Object

console.log(Math.sqrt(16));//gives the sqrt of any number
console.log(Math.pow(5,2));//gives the value of 5^2

console.log(Math.ceil(9.6));//roundoff the value to the highest
console.log(Math.ceil(9.2));

console.log(Math.floor(9.3));//roundoff the value to the lowest
console.log(Math.floor(9.9));

console.log(Math.round(9.6));//round off the value to the highest when the decimal is above 0.5 else lowest
console.log(Math.round(9.4));

console.log(Math.min(2,3,4));//gives the min value
console.log(Math.max(2,3,4));//gives the max value

console.log(Math.floor(Math.random() * 10));//gives random value b/w 0 to 10