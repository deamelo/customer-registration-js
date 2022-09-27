
import Api from "./Api.js"

const clients = await Api.listClients("clients")
const listClients  = document.querySelector("ul")

function templateClients(clients){

  clients.forEach(({id, name, email, telephone, createdAt})=>{
    const li = document.createElement("li")
    
    li.innerHTML = `
      <p>ID: ${id}</p>
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${telephone}</p>
      <p>Cadastrado em: ${createdAt}</p>
    `
    
    listClients.appendChild(li)
})

}

templateClients(clients)

