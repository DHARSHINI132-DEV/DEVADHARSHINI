let  btn = document.querySelector("button")

let form = document.querySelector("form")

btn.addEventListener("click",()=>{

    let div=document.createElement("div")

    // ! for Item
    // for ItemLabel
    let itemLabel = document.createElement("label")
    itemLabel.innerText="Item"

    div.appendChild(itemLabel)

    //for ItemInput
    let itemInput = document.createElement("input")
    itemInput.setAttribute("placeholder","Enter Item")

    div.appendChild(itemInput)

    // ! for Quantity
    //for QuantityLabel
    let quantityLabel = document.createElement("label")
    quantityLabel.innerText="Quantity"

    div.appendChild(quantityLabel)

    //for QuantityInput
    let quantityInput = document.createElement("input")
    quantityInput.setAttribute("type","number")
    quantityInput.setAttribute("placeholder","Enter Quantity")

    div.appendChild(quantityInput)

    // ! for Price
    //for PriceLabel
    let priceLabel = document.createElement("label")
    priceLabel.innerText = "Price"

    div.appendChild(priceLabel)

    //for PriceInput
    let priceInput = document.createElement("input") 
    priceInput.setAttribute("type","number")
    priceInput.setAttribute("placeholder","Enter Price")

    div.appendChild(priceInput)

    form.appendChild(div)
})