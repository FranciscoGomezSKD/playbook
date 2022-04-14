class trendtopic {
    constructor(ubicacion,trends,trendinfo){
        this.ubicacion = ubicacion,
        this.trends = trends,
        this.trendinfo = trendinfo
    }

    getLocation() {
        return `Location: ${this.ubicacion}`
    }

    getTrendInfo(trendNumber) {
        return `The selected Trending Topic is: ${this.trendinfo[trendNumber-1]}`
    }
}


console.log("Ejemplo issue con clases")
const obj = new trendtopic("México",5,["trend1","trend2","trend3","trend4","trend5"])
console.log(obj.getTrendInfo(3))