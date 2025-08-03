let form = document.querySelector("form")
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userName =document.getElementById("userName").value
    let userPass =document.getElementById("userPass").value

    console.log(userName,userPass);

    //! storing date in local storage

    localStorage.setItem("userName",userName)
    localStorage.setItem("userPass",userPass)

    // alert("signup done..🔥🔥");
    
    open("./login.html")
})