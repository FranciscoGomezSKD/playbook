const user = {
    name: "frank",
    place: "cdmx",
    age: 38,
    friends: 22,

    GeneralInfo : function(){
        console.log(`${this.name} from ${this.place} has ${this.friends} friends`)
    }
}


user.GeneralInfo()