let counter = 0

let count =  document.querySelector("b")
count.innerText = counter

let increment =()=>{
    counter++
    count.innerText =  counter
    if(counter>=10){
        alert("limit exceeds")
        button.removeEventListener("click",increment)
    }
}

let button = document.querySelector("button")
button.addEventListener("click",increment)