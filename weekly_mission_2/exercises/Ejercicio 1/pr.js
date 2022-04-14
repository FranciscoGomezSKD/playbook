const PullRequest = {
    title: "Update",
    branchName: "Main",
    dateCreated: "13/04/22",
    status: "Pendiente",
    repositoryNameAssociated: "Frank",

    getStatus() {
        return this.status
    },

    getTitleAndAutor() {
        return `${this.title} by ${this.repositoryNameAssociated}`
    }
}

console.log("Estado del PR: " + PullRequest.status)
console.log("Datos del PR: " + PullRequest.getTitleAndAutor())

