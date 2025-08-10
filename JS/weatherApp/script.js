let getData=async (city)=> {
    try {
        
        
            let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f7c46a9cea09f0a4f33c7b70f17f2a9&units=metric`)
            // console.log(res)
        
            let data= await res.json()
            // console.log(data)
        
            let location = document.querySelector(".location")
            location.innerText=data.name
        
            let temp= document.querySelector(".temp")
            temp.innerText=data.main.temp
        
    } catch (error) {
        console.log(error)
        let main=document.querySelector("main")
        main.innerText(error)
    }
}


// getData("chennai")


let button = document.querySelector("button")

button.addEventListener("click",()=>{
    let input= document.querySelector("input")
    
    let city= input.value
    getData(city)
})