const bio = {
    location: "cdmx",
    education: "universidad",
    relationship: "single",
    contact: "555544664422",

    GeneralInfo : function() {
        console.log( `${this.location}, ${this.contact}` )
    }
}

bio.GeneralInfo()