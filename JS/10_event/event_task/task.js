let outer = document.querySelector(".outer")
let changeBackground =(color)=>{
    outer.style.backgroundColor = color
}

let changeTheme =()=>{
    outer.classList.toggle("dark")//toggle will help to change the color 
    //it is used instead of adding and removing the class(if the class is present it will remove if the class is not resent it will add)
}