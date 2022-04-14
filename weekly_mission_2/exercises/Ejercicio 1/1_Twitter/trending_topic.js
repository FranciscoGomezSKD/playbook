const trendtopic = {
    ubicacion: "México",
    trends: 5,
    trendinfo: ["trend1","trend2","trend3","trend4","trend5"],

    getLocation() {
        return `Location: ${this.ubicacion}`
    },

    getTrendInfo(trendNumber) {
        return `The selected Trending Topic is: ${this.trendinfo[trendNumber-1]}`
    }
}

console.log(trendtopic.getLocation())
console.log(trendtopic.getTrendInfo(4))