const ul = document.querySelector("#card")

const card = ({name, email, telephone}) => {
    
    const li = document.createElement("li")
    const inputName = document.createElement("p")
    const inputEmail = document.createElement("p")
    const inputTelephone = document.createElement("p")
    
    inputName.innerText = name
    inputEmail.innerText = email
    inputTelephone.innerText = telephone

    li.appendChild(inputName)
    li.appendChild(inputTelephone)
    li.appendChild(inputEmail)

    ul.appendChild(li)

}

export{card}