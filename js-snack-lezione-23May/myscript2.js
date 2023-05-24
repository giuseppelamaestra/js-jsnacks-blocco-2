const ulElement = document.querySelector("ul")


function getNewLiElement(){
    const newLiElement = document.createElement("li")
    newLiElement.classList.add("list-item")
    newLiElement.innerHTML = "elemento della lista"

   

    return newLiElement

   
}



for(let i = 0; i < 10; i++ ){
    const liElement = getNewLiElement();
    console.log(liElement)
}

