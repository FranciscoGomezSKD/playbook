class profile {
    constructor(name, phone, location, languaje, mail){
        this.name = name,
        this.phone = phone,
        this.location = location,
        this.languaje = languaje,
        this.mail = mail
    }
}


console.log("Ejemplo profile con clases")
const obj = new profile("frank","5544556611","cdmx","Spanish","contact@mail.com")
console.log(obj)