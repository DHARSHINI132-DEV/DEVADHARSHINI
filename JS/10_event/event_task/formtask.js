let num = document.getElementById("num")
console.log(num);

num.addEventListener("submit",(num)=>{
    num.preventDefault()

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    console.log(num1+num2)
    
    let output=document.querySelector(".output")
    output.innerHTML=`<h1>The addition of ${num1} and ${num2} is ${num1+num2}</h1>`
})

let select = document.querySelector("select")
// console.log(select);

select.addEventListener("change",(e)=>{
    let color=e.target.value
    // console.log(color)


    let outer = document.querySelector(".outer")
    outer.style.backgroundColor =color
})