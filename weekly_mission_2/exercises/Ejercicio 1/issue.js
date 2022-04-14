const issue = {
    title: "Título de issue",
    repositoryNameAssociated: "Frank",
    status: "Activo",
    numberOfComments: 0,
    labels: 0,
    author: "Francisco",
    dateCreated: "13/04/22",
    lastUpdated: "13/04/22",

    getTitleAndAuthor() {
        return `The issue: ${this.title} was created by ${this.author}`
    },

    getGeneralInfo() {
        return `Issue created by ${this.author} at ${this.dateCreated}`
    }
}

console.log("Nombre del issue:" + issue.title)
console.log("Datos del issue: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
