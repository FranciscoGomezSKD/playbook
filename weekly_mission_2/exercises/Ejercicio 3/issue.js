class issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.status = status,
        this.numberOfComments = numberOfComments,
        this.labels = labels,
        this.author = author,
        this.dateCreated = dateCreated,
        this.lastUpdated = lastUpdated
    }

    getTitleAndAuthor() {
        return `The issue: ${this.title} was created by ${this.author}`
    }

    getGeneralInfo() {
        return `Issue created by ${this.author} at ${this.dateCreated}`
    }
}

console.log("Ejemplo issue con clases")
const obj = new issue("Título de issue", "Frank","Activo",0,0,"Francisco","13/04/22","13/04/22")
console.log(obj.getGeneralInfo())
