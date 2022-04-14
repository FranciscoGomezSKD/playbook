class travel {
    constructor(date, cost, payment, itinerary){
        this.date = date,
        this.cost = cost,
        this.payment = payment,
        this.itinerary = itinerary
    }
}


console.log("Ejemplo profile con clases")
const obj = new travel("13/04/22","$150","paypal",["casa", "trabajo"])
console.log(obj)