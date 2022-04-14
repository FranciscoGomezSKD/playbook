const user = {
    nombre: "Frank",
    username: "FrankTweet",
    bio: "Acerca de Franktweet",
    age: "38",

    getGeneralInfo() {
        return `${this.nombre} has a nickame: ${this.username}`
    }

}

console.log(user.getGeneralInfo())