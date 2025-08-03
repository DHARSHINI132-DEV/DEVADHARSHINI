let now = new Date()//gives current day date time
console.log(now);

console.log("hours is",now.getHours());//gives current hour
console.log(now.getMinutes());//gives currnet minute
console.log(now.getSeconds());//gives current seconds

console.log(now.getDate());//gives currnet date
console.log(now.getFullYear());//gives the year

console.log(now.getDay());//gives the day in numbers(5--friday)
console.log(now.getMonth());//gives the  month in numbers(7--july)

//! to get the day and months
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log(days[now.getDay()]);//gives current day

//let dayIndex = now.getDay()
//let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//console.log(days[dayIndex]);

let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

console.log(months[now.getMonth()]);//gives current month

console.log(now.toDateString());//Fri Aug 01 2025
console.log(now.toLocaleString());//01/08/2025, 13:17:14
console.log(now.toLocaleDateString());//01/08/2025
