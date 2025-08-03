// ! how to target elements

// 1. target by the id
let logo = document.getElementById("logo")
console.log(logo);

//2.target by the class

//the return type of this will be a html collection even if there is single element or no element
let boxes = document.getElementsByClassName("box")
console.log(boxes);

// this will returrn all the boxes which will be in the form of array 
// but here we call it as HTMLcollection , but it will have the same behaviour as array by index 
// so we can target particular element by using index

//the above one will target all the boxes 
//for targeting any one box we will use the below one

let secondBox = boxes[1]
console.log(secondBox)

//3.target by the tag name

// This is similar to that of class as it also contains index
let lists = document.getElementsByTagName("li")
console.log(lists);

let contact = lists[2]
console.log(contact);

let login = document.getElementsByClassName("btn")
console.log(login[0]);
//whenever we are using class name and tag name it will return html collection even it has only one element
//so for targeting one element ,index should be used

//4. target by the query selector

// this will select the first element only 
// if there is only one then it will take that only

let logo2 = document.querySelector("#logo")
console.log(logo2);

let li = document.querySelector("li")
console.log(li);

//whenever we are using query selector it will target only one element that is the first element

let firstBox = document.querySelector(".box")
console.log(firstBox);

let b = document.getElementsByClassName("box")
console.log(b[0]);

//5. querySelectorAll-- for targetting any element using the query selector

let boxess = document.querySelectorAll(".box")
console.log(boxess);
console.log(boxess[1]);

// ! innerText , innerHTML
//1st we should target the element need in this case we have already targeted  the element so we are directly console the elemnt
console.log(secondBox.innerText);//gives normal text

console.log(secondBox.innerHTML);//gives text with the tag

let thirdBox = boxes[2]
console.log(thirdBox);
//thirdBox.innerText="<h2>I am box 3</h2><p>hello how are you</p>"//---it will not understand the tags because it will take the text as it is.

thirdBox.innerHTML="<h2>I am box 3</h2><p>hello how are you</p>"
//it will understand the tags

//if we use both the innerText and innerHTML the 1st one will be replaced by the second one.

// !  how to style 

// how to css style
// variablename.style.propertyname="value"

let loginBtn = document.querySelector(".btn")
console.log(loginBtn)

loginBtn.style.backgroundColor ="red"
loginBtn.style.padding = "10px"
loginBtn.style.color = "white"



// !  how to add / remove the class 

// let section = document.getElementsByTagName("section")
let section = document.querySelector("section")

console.log(section)

// section[0].style.backgroundColor="green"
section.classList.add("con2")

console.log(section.classList)

// section.classList.remove("con2")

//! how to create element

let button = document.createElement("button")

button.innerText = "button from js"

button.style.backgroundColor = "green"
button.style.color = "white"

//it will not display the button until mentioning where we want the button(element)

// section.after(button) // will display after the section
// section.before(button) // will display before the section
// section.append(button) // will display inside the section(after)
// section.prepend(button) // will display inside the section(before)

//even if we give more position for display it will consider the last one 

let footer = document.createElement("footer")

footer.classList.add("footer")
footer.innerHTML="<p> footer from js</p>"

footer.style.backgroundColor = "black"
footer.style.color = "white"

section.after(footer)