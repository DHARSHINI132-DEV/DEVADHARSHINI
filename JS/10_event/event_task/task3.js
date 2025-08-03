let form = document.querySelector("form")
let btn = document.querySelector("button")

// btn.addEventListener("click", e => {
//     console.log(e);
//     console.log("Button clicked");
// })

//* we use preventDefault() to prevent the refreshing which will be automatically done once we click the submit button in the form
//* if we use the preventdefault in btn submit event will not occur only button event will occur
//* advantage --> if we add more than 1 buttons it will do submit event for both the button

form.addEventListener("submit", event => {
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    let inputs = document.getElementsByTagName("input")
    let labels = document.getElementsByTagName("label")

    for(let i =0 ; i<inputs.length;i++){
        console.log(labels[i].innerText , inputs[i].value)
    }
})