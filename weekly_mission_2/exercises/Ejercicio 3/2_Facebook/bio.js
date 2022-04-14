class bio {
    constructor(location, education, relationship, contact){
        this.location = location,
        this.education = education,
        this.relationship = relationship,
        this.contact = contact
    }

    GeneralInfo() {
        console.log( `${this.location}, ${this.contact}` )
    }
}


console.log("Ejemplo issue con clases")
const obj = new bio("cdmx","universidad","single","555544664422")
obj.GeneralInfo()