class post {
    constructor(author, date, content, coments, likes, shares){
        this.author = author,
        this.date = date,
        this.content = content,
        this.coments = coments,
        this.likes = likes,
        this.shares = shares
    }

    Getpost(){
        console.log( `${this.content} has ${this.likes} likes and ${this.shares} shares` )
    }

}


console.log("Ejemplo post con clases")
const obj = new post("frank","13/04/22","First post",5,12,22)
obj.Getpost()