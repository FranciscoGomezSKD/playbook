class hashtag {
    constructor(name,position,tweets,clase){
        this.name = name,
        this.position = position,
        this.tweets = tweets,
        this.clase = clase
    }

    GeneralInfo(){
        return `The hashtag: ${this.name}/${this.clase} is in the ${this.position} position with ${this.tweets} tweets`
    }
}


console.log("Ejemplo issue con clases")
const obj = new hashtag("prueba", 1,324,"Software")
console.log(obj.GeneralInfo())

