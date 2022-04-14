class user {
    constructor(nombre, username, bio, age){
        this.nombre = nombre,
        this.username = username,
        this.bio = bio,
        this.age = age
    }

    getGeneralInfo() {
        return `${this.nombre} has a nickame: ${this.username}`
    }
}


console.log("Ejemplo issue con clases")
const obj = new user("Frank","FrankTweet","Acerca de Franktweet",38)
console.log(obj.getGeneralInfo())