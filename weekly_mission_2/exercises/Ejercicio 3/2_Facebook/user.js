class user {
    constructor(name, place, age, friends){
        this.name = name,
        this.place = place,
        this.age = age,
        this.friends = friends
    }

    GeneralInfo(){
        console.log(`${this.name} from ${this.place} has ${this.friends} friends`)
    }
}


console.log("Ejemplo user con clases")
const obj = new user("frank","cdmx",38,22)
obj.GeneralInfo()