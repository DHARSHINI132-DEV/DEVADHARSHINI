let stuform = document.getElementById("stuform")
console.log(stuform);

stuform.addEventListener("submit",(e)=>{
    e.preventDefault()

    let userName = document.getElementById("userName").value
    let Password = document.getElementById("Password").value
    console.log(userName,Password)
    console.log("hello")
})