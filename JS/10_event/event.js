//Event --> any action we are performing
// 1.inline
// 2.dom property
// 3.addEventListener(event,function)
console.log("this is event file");

//mouse event
let login =()=>{
    console.log("login done");//we want this message when we press the login button ,for that we should add onclick in the html file where the login button is present and the func should be called.
}

let changeColor =()=>{
    let main = document.querySelector("main")
    // console.log(main);

    main.style.backgroundColor = "pink"//when we want to change the color when the mouse is in the elememt we use onmouseover and the func should be called
}

let changeColor2 =()=>{
    let main = document.querySelector("main")
    // console.log(main);

    main.style.backgroundColor = "aliceblue"//when we want to get back the color before the mouse is placed we should use onmouseleave and the func should be called
}

let button = document.querySelector(".btn")
console.log(button)

button.onclick =()=>{
    console.log("this is dom property")
}

let section=document.querySelector("section")
console.dir(section)
section.onmouseenter=()=>{
    console.log("mouse entered")
}
section.onmouseleave=()=>{
    console.log("mouse leaved ")
}

// console.dir(first) --> directory of the tag to see all the events property

// addEventListener("eventname",function)  --> for the  same event we can add more one function
// removeEventListener("eventname",function)
let counter=0;
let fn=()=>{
    counter++
    console.log("This is click function")
    if(counter==3){
        section.removeEventListener("click",fn)
    }
}
section.addEventListener("click",fn)
section.addEventListener("click",()=>{
    
    console.log("changed............")
})

section.addEventListener("click",()=>{
    console.log("section is clicked")
})
