class PullRequest{
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title,
        this.branchName = branchName,
        this.dateCreated = dateCreated,
        this.status = status,
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    getStatus() {
        return this.status
    }

    getTitleAndAutor() {
        return `${this.title} by ${this.repositoryNameAssociated}`
    }
}

console.log("Ejemplo issue con clases")
const obj = new PullRequest("Update", "Main","13/04/22","Pendiente","Frank")
console.log(obj.getTitleAndAutor())



