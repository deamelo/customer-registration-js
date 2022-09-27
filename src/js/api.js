export default class Api {

    static url= 'https://customer-registration-node-ts.herokuapp.com/'
    static token= JSON.parse(localStorage.getItem('token'))

    static async registerClient(path, data){
        const response = await fetch(`${this.url}${path}`, {
            "method":'POST',
            "headers": {
                'Content-Type': 'application/json'
            },
            "data":JSON.stringify(data)
        })
        const result= await response.json()
        return result
    }

    static async loginClient(path, data){
        const response = await fetch(`${this.url}${path}`, {
            "method":'POST',
            "headers": {
                'Content-Type': 'application/json'
            },
            "data":JSON.stringify(data)
        })
        const result= await response.json()
        return result
    }

    static async listClients(path){

        const response = await fetch(`${this.url}${path}`)
        const data = await response.json()

        return data
    }

    static async profileClient(path){

        let response = await fetch(`${this.url}${path}`, {
            "headers": {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+this.token
            },
        })
        const result= await response.json()
        return result
    }

    static async updateClient(path, data){

        let response = await fetch(`${this.url}${path}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+this.token
            },
            body:JSON.stringify(data)
        })
        const result= await response.json()
        return result
    }

    static async deleteClient(path){

        const response = await fetch(`${this.url}${path}`, {
            "method": "DELETE",
            "headers":{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ this.token
            }
        })
        const result= response.status
        return result
    }

    static async registerContact(path, data){
        const response = await fetch(`${this.url}${path}`, {
            "method":'POST',
            "headers": {
                'Content-Type': 'application/json'
            },
            "data":JSON.stringify(data)
        })
        const result= await response.json()
        return result
    }

    static async listContacts(path){

        let response = await fetch(`${this.url}${path}`, {
            "headers": {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+this.token
            },
        })
        const result= await response.json()
        return result
    }

    static async profileContact(path, id){

        let response = await fetch(`${this.url}${path}/${id}`, {
            "headers": {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+this.token
            },
        })
        const result= await response.json()
        return result
    }

    static async updateContact(path, data, id){

        let response = await fetch(`${this.url}${path}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+this.token
            },
            body:JSON.stringify(data)
        })
        const result= await response.json()
        return result
    }

    static async deleteContact(path, id){

        const response = await fetch(`${this.url}${path}/${id}`, {
            "method": "DELETE",
            "headers":{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ this.token
            }
        })
        const result= response.status
        return result
    }

}

